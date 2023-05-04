//
// Copyright 2023 Stacklok, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package app

import (
	"github.com/spf13/cobra"
)

// migrateCmd represents the migrate command
var migrateCmd = &cobra.Command{
	Use:   "migrate",
	Short: "Database migration tool",
	Long:  `Use tool with a combination of up to down to migrate the database.`,
	Run: func(cmd *cobra.Command, args []string) {
	},
}

func init() {
	RootCmd.AddCommand(migrateCmd)
	migrateCmd.PersistentFlags().BoolP("yes", "y", false, "Answer yes to all questions")
	migrateCmd.PersistentFlags().StringP("dbhost", "H", "localhost", "Database host")
	migrateCmd.PersistentFlags().Int("dbport", 5432, "Database port")
	migrateCmd.PersistentFlags().StringP("dbuser", "u", "postgres", "Database user")
	migrateCmd.PersistentFlags().StringP("dbpass", "P", "postgres", "Database password")
	migrateCmd.PersistentFlags().StringP("dbname", "d", "postgres", "Database name")
	migrateCmd.PersistentFlags().StringP("sslmode", "s", "disable", "Database sslmode")
}
