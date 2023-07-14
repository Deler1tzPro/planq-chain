package v2

import (
	store "github.com/cosmos/cosmos-sdk/store/types"
	icahosttypes "github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/host/types"
	erc20types "github.com/evmos/evmos/v12/x/erc20/types"
	"github.com/planq-network/planq/app/upgrades"
)

const (
	// UpgradeName is the shared upgrade plan name for mainnet
	UpgradeName = "v2.0.0"
	// UpgradeInfo defines the binaries that will be used for the upgrade
	UpgradeInfo = `''`
	// MaxRecover is the maximum amount of coins to be redistributed in the upgrade
)

var Upgrade = upgrades.Upgrade{
	UpgradeName:          UpgradeName,
	CreateUpgradeHandler: CreateUpgradeHandler,
	StoreUpgrades: store.StoreUpgrades{
		Added:   []string{icahosttypes.SubModuleName, erc20types.ModuleName},
		Deleted: []string{},
	},
}