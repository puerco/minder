// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.19.1
// source: policy_status.sql

package db

import (
	"context"
	"database/sql"
	"time"
)

const createRuleEvaluationStatusForRepository = `-- name: CreateRuleEvaluationStatusForRepository :exec
INSERT INTO rule_evaluation_status (
    policy_id,
    repository_id,
    rule_type_id,
    entity,
    eval_status,
    details,
    last_updated
) VALUES ($1, $2, $3, 'repository', $4, $5, NOW())
`

type CreateRuleEvaluationStatusForRepositoryParams struct {
	PolicyID     int32           `json:"policy_id"`
	RepositoryID sql.NullInt32   `json:"repository_id"`
	RuleTypeID   int32           `json:"rule_type_id"`
	EvalStatus   EvalStatusTypes `json:"eval_status"`
	Details      string          `json:"details"`
}

func (q *Queries) CreateRuleEvaluationStatusForRepository(ctx context.Context, arg CreateRuleEvaluationStatusForRepositoryParams) error {
	_, err := q.db.ExecContext(ctx, createRuleEvaluationStatusForRepository,
		arg.PolicyID,
		arg.RepositoryID,
		arg.RuleTypeID,
		arg.EvalStatus,
		arg.Details,
	)
	return err
}

const getPolicyStatusByGroup = `-- name: GetPolicyStatusByGroup :many
SELECT p.id, p.name, ps.policy_status, ps.last_updated FROM policy_status ps
INNER JOIN policies p ON p.id = ps.policy_id
WHERE p.group_id = $1
`

type GetPolicyStatusByGroupRow struct {
	ID           int32           `json:"id"`
	Name         string          `json:"name"`
	PolicyStatus EvalStatusTypes `json:"policy_status"`
	LastUpdated  time.Time       `json:"last_updated"`
}

func (q *Queries) GetPolicyStatusByGroup(ctx context.Context, groupID int32) ([]GetPolicyStatusByGroupRow, error) {
	rows, err := q.db.QueryContext(ctx, getPolicyStatusByGroup, groupID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetPolicyStatusByGroupRow{}
	for rows.Next() {
		var i GetPolicyStatusByGroupRow
		if err := rows.Scan(
			&i.ID,
			&i.Name,
			&i.PolicyStatus,
			&i.LastUpdated,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getPolicyStatusByIdAndGroup = `-- name: GetPolicyStatusByIdAndGroup :one
SELECT p.id, p.name, ps.policy_status, ps.last_updated FROM policy_status ps
INNER JOIN policies p ON p.id = ps.policy_id
WHERE p.id = $1 AND p.group_id = $2
`

type GetPolicyStatusByIdAndGroupParams struct {
	ID      int32 `json:"id"`
	GroupID int32 `json:"group_id"`
}

type GetPolicyStatusByIdAndGroupRow struct {
	ID           int32           `json:"id"`
	Name         string          `json:"name"`
	PolicyStatus EvalStatusTypes `json:"policy_status"`
	LastUpdated  time.Time       `json:"last_updated"`
}

func (q *Queries) GetPolicyStatusByIdAndGroup(ctx context.Context, arg GetPolicyStatusByIdAndGroupParams) (GetPolicyStatusByIdAndGroupRow, error) {
	row := q.db.QueryRowContext(ctx, getPolicyStatusByIdAndGroup, arg.ID, arg.GroupID)
	var i GetPolicyStatusByIdAndGroupRow
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.PolicyStatus,
		&i.LastUpdated,
	)
	return i, err
}

const listRuleEvaluationStatusByPolicyId = `-- name: ListRuleEvaluationStatusByPolicyId :many
SELECT res.eval_status as eval_status, res.last_updated as last_updated, res.details as details, res.repository_id as repository_id, res.entity as entity, repo.repo_name as repo_name, repo.repo_owner as repo_owner, repo.provider as provider, rt.name as rule_type_name, rt.id as rule_type_id
FROM rule_evaluation_status res
INNER JOIN repositories repo ON repo.id = res.repository_id
INNER JOIN rule_type rt ON rt.id = res.rule_type_id
WHERE res.policy_id = $1 AND
    (
        CASE
            WHEN $2::entities = 'repository' AND res.repository_id = $3::integer THEN true
            WHEN $2::entities  = 'artifact' AND res.artifact_id = $3::integer THEN true
            WHEN $3::integer IS NULL THEN true
            ELSE false
        END
    )
`

type ListRuleEvaluationStatusByPolicyIdParams struct {
	PolicyID   int32         `json:"policy_id"`
	EntityType NullEntities  `json:"entity_type"`
	EntityID   sql.NullInt32 `json:"entity_id"`
}

type ListRuleEvaluationStatusByPolicyIdRow struct {
	EvalStatus   EvalStatusTypes `json:"eval_status"`
	LastUpdated  time.Time       `json:"last_updated"`
	Details      string          `json:"details"`
	RepositoryID sql.NullInt32   `json:"repository_id"`
	Entity       Entities        `json:"entity"`
	RepoName     string          `json:"repo_name"`
	RepoOwner    string          `json:"repo_owner"`
	Provider     string          `json:"provider"`
	RuleTypeName string          `json:"rule_type_name"`
	RuleTypeID   int32           `json:"rule_type_id"`
}

func (q *Queries) ListRuleEvaluationStatusByPolicyId(ctx context.Context, arg ListRuleEvaluationStatusByPolicyIdParams) ([]ListRuleEvaluationStatusByPolicyIdRow, error) {
	rows, err := q.db.QueryContext(ctx, listRuleEvaluationStatusByPolicyId, arg.PolicyID, arg.EntityType, arg.EntityID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []ListRuleEvaluationStatusByPolicyIdRow{}
	for rows.Next() {
		var i ListRuleEvaluationStatusByPolicyIdRow
		if err := rows.Scan(
			&i.EvalStatus,
			&i.LastUpdated,
			&i.Details,
			&i.RepositoryID,
			&i.Entity,
			&i.RepoName,
			&i.RepoOwner,
			&i.Provider,
			&i.RuleTypeName,
			&i.RuleTypeID,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateRuleEvaluationStatusForRepository = `-- name: UpdateRuleEvaluationStatusForRepository :exec
UPDATE rule_evaluation_status 
    SET eval_status = $1, details = $2, last_updated = NOW()
    WHERE id = $3
`

type UpdateRuleEvaluationStatusForRepositoryParams struct {
	EvalStatus EvalStatusTypes `json:"eval_status"`
	Details    string          `json:"details"`
	ID         int32           `json:"id"`
}

func (q *Queries) UpdateRuleEvaluationStatusForRepository(ctx context.Context, arg UpdateRuleEvaluationStatusForRepositoryParams) error {
	_, err := q.db.ExecContext(ctx, updateRuleEvaluationStatusForRepository, arg.EvalStatus, arg.Details, arg.ID)
	return err
}

const upsertRuleEvaluationStatus = `-- name: UpsertRuleEvaluationStatus :exec
INSERT INTO rule_evaluation_status (
    policy_id,
    repository_id,
    artifact_id,
    rule_type_id,
    entity,
    eval_status,
    details,
    last_updated
) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
ON CONFLICT(policy_id, repository_id, COALESCE(artifact_id, 0), entity, rule_type_id) DO UPDATE SET
    eval_status = $6,
    details = $7,
    last_updated = NOW()
WHERE rule_evaluation_status.policy_id = $1
  AND rule_evaluation_status.repository_id = $2
  AND rule_evaluation_status.artifact_id IS NOT DISTINCT FROM $3
  AND rule_evaluation_status.rule_type_id = $4
  AND rule_evaluation_status.entity = $5
`

type UpsertRuleEvaluationStatusParams struct {
	PolicyID     int32           `json:"policy_id"`
	RepositoryID sql.NullInt32   `json:"repository_id"`
	ArtifactID   sql.NullInt32   `json:"artifact_id"`
	RuleTypeID   int32           `json:"rule_type_id"`
	Entity       Entities        `json:"entity"`
	EvalStatus   EvalStatusTypes `json:"eval_status"`
	Details      string          `json:"details"`
}

func (q *Queries) UpsertRuleEvaluationStatus(ctx context.Context, arg UpsertRuleEvaluationStatusParams) error {
	_, err := q.db.ExecContext(ctx, upsertRuleEvaluationStatus,
		arg.PolicyID,
		arg.RepositoryID,
		arg.ArtifactID,
		arg.RuleTypeID,
		arg.Entity,
		arg.EvalStatus,
		arg.Details,
	)
	return err
}
