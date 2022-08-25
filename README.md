# The Brewing Station

## A Winemasters definitive guide

This guide defines and explains the various panels and information present on The Brewing Station dashboard (henceforth referred to as just ‘the dashboard’). Most of everything is self-explanatory but if anything isn’t clear it can probably be found in one of the sections below.

# Dashboard Overview
## Dashboard in Detail

The dashboard is divided into 4 specific parts:

1. **The Address panel** - you can either connect using MOST popular browser wallets such as Metamask/Rabby **or** if you want to check an arbitrary address you can enter it and use the check address button \
**NOTE**: Metamask/Rabby add-on must still be installed regardless of your choice
2. **The Information panel** - here the pertinent information will be displayed, this information is refreshed every ~7.5 seconds; but the ACTUAL rate depends on the blockchain and network connectivity.
3. **Sub Panel selectors** - these buttons allow you to access the various sub-panels available in the dashboard. These are discussed in more detail below.
4. **Grape Finance links** - these buttons link directly to the relevant Grape Finance page.

# Sub Panels


## Winery Panel

This is the first panel you will see when loading the dashboard and contains information relating to what is happening in your winery in Winemaker

1. **Currency Prices** -
    1. GRAPE - Price of GRAPE token
    2. VINTAGE - Price of VINTAGE token
2. **Vintage PM** - vintage Per Minute
    3. current VPM / Maximum VPM
3. **Fatigue Info** -
    4. **Max Fatigue** - date and time you will reach maximum fatigue
    5. **50% Fatigue** - date and time you will reach 50% fatigue \
	Resting before 50% is recommended to maximize production
    6. **Current Fatigue** - current fatigue across your winery
    7. **Reset Fatigue Cost** - the cost, in GRAPE, to reset your fatigue to 0%
4. **Masters Staked** - the amount of master vintners you have staked
5. **Normals Staked** - the amount of normal vintners you have staked
6. **Tools Staked** - the total amount of tools you have staked
7. **Vintage Earned** - how much VINTAGEis able to be claimed before taxes are taken into account.
8. **Storage Used** - how much storage is currently used by your unclaimed VINTAGE
9. **Tool Mint Costs** - the cost in USD to mint each of the different tools available
10. **Buttons**
    8. **Reset Fatigue** - calls the contract function to reset fatigue using GRAPE
    9. **Claim $VINTAGE** - calls the contract function to claim accrued vintage wine.

## Cellar Panel

The cellar panel shows you information pertaining to your VINTAGE stored in the Cellar, SVINTAGE staked in the Vineyard, pending rewards, and pending claims

1. **Ratio** - the current VINTAGE-SVINTAGE ratio
2. **Wallet**- VINTAGE/SVINTAGE currently held in your wallet
3. **Buttons**-
    1. **Deposit** - deposits **ALL** of the VINTAGE in your wallet, into the **Cellar**
    2. **Stake** - stakes **ALL** of the SVINTAGE in your wallet, into the **Vineyard**
    3. **Unstake** - unstakes **ALL** of the SVINTAGE in the **Vineyard** and returns the SVINTAGE to your **Cellar**
    4. **Withdraw** - withdraw **ALL** of the VINTAGE stored in the **Cellar** as a delayed unstake, with the VINTAGE claimable after **2 days**
4. **Vineyard Staking** - information pertaining to your SVINTAGE currently staked in the Vineyard
    5. **Vineyard** - your balance of SVINTAGE in the Vineyard
    6. **Pending** - the amount of WINE rewards you can claim
    7. **Claim Rewards button** - claims your pending rewards
5. **Pending Claims** - when you withdraw from the cellar the long way, you have to wait ~2 days before you are able to claim the VINTAGE. This panel shows information pertaining to VINTAGE waiting to be able to be claimed here.
    8. **Amount** - the amount of VINTAGE pending
    9. **Claimable on** - the date and time you will be able to claim the pending VINTAGE
    10. **Claim Pending button** - when claimable, this button will let you claim all the waiting VINTAGE back from the Cellar

## Winepress Panel

The winepress panel shows information related to what you’ve currently deposited into the Winepress, your rewards, and most importantly your assassination risk.

1. **Deposits** - how much WINE-MIM-LP you’ve deposited
2. **Compounded** - how much LP you’ve compounded
3. **Pending Rewards** - how much WINE-MIM-LP you have waiting as rewards
4. **Daily Rewards** - how much WINE-MIM-LP you will earn daily
5. **Assassination Risk** - how close you are to the 350% ROI limit where you’ll be at risk of being ‘assassinated’.