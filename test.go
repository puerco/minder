package vex

import (
	"github.com/stacklok/minder/pkg/provider"
	"github.com/minder-providers/git"
	"github.com/minder-providers/oci"
	"github.com/minder-providers/github"

	tgit "github.com/minder-providers/traits/git"
	toci "github.com/minder-providers/traits/oci"
)

type Provider {
   minder.Provider
}

// Ensure the provider implements the required
var _ Provider = (*tgit.Checkout)(nil)
var _ Provider = (*tgit.Commit)(nil)
var _ Provider = (*tgit.Push)(nil)
var _ Provider = (*toci.AttachmentLister)(nil)

func New() *Provider {
	provider := &Provider {
		minder.Provider
	}

	provider.Namespace("vex")

	provider.RequiredTraits(
		minder.Trait("git/checkout")
		minder.Trait("git/commit")
		minder.Trait("git/push")
		minder.Trait("oci/attachmentLister")
	)
	
    provider.RequiredEntities(
		minder.EntityType("pull_request"),
		minder.EntityType("attestation/vulnReport"),
	)

	provider.Traits(
		minder.Trait("vex/vexApplier"),
	)

	provider.Entities(
		minder.EntityType("vexDocument"),
		minder.EntityType("attestation/vex"),
	)

	provider.RegisterAPI(
		"ApplyVEX", // Method name (exposed as namespace + this name)
		minder.EntityType("attestation/vulnReport"), // Return type
		[]minder.EntityType(  // Argument spec:
			minder.EntityType("attestation/vulnReport"),
			minder.EntityType("attestation/vulnReport"),
		),
		&applyHandler, // Handler
	)
}

