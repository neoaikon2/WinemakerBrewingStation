// Compilation of contract addresses
const WINEMAKER_REWARDS = "0xae1de1c258c5587cfea69045992a5467cff4406f";
const WINEMAKER_PROGRESSION = "0x46840fedbafaf7ad2b9b6395421662ee9279349f";
const WINEPRESS = "0x2707ccc10d6c1ce49f72867ab5b85de11e64979f";
const VINEYARD = "0x28c65dcB3a5f0d456624AFF91ca03E4e315beE49"
const GRAPE_TOKEN = "0x5541D83EFaD1f281571B343977648B75d95cdAC2";
const MIM_TOKEN = "0x130966628846bfd36ff31a822705796e8cb8c18d";
const VINT_TOKEN = "0x01Af64EF39AEB5612202AA07B3A3829f20c395fd";
const SVINT_TOKEN = "0xf016e69F2c08a0b743a7d815d1059318DCa8Fc0e";
const WINE_MIM_LP = "0x00cb5b42684da62909665d8151ff80d1567722c3";

const WINEMAKER_REWARDS_ABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"CLAIM_VINTAGEWINE_BURN_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CLAIM_VINTAGEWINE_CONTRIBUTION_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEAD_ADDR","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FATIGUE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_maxSize","type":"uint256"}],"name":"batchedStakesOfOwner","outputs":[{"components":[{"internalType":"uint256","name":"vintnerId","type":"uint256"},{"internalType":"uint256","name":"vintnerPPM","type":"uint256"},{"internalType":"bool","name":"isResting","type":"bool"},{"internalType":"uint256","name":"endTimestamp","type":"uint256"}],"internalType":"struct Winery.StakedVintnerInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_maxSize","type":"uint256"}],"name":"batchedToolsOfOwner","outputs":[{"components":[{"internalType":"uint256","name":"toolId","type":"uint256"},{"internalType":"uint256","name":"toolPPM","type":"uint256"}],"internalType":"struct Winery.StakedToolInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cellarAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"fatiguePerMinute","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ppm","type":"uint256"}],"name":"fatiguePerMinuteCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"fatigueTuner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getFatigueAccrued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getFatiguePerMinuteWithModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getMasterVintnerNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"}],"name":"getRestingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTimeUntilFatigued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTotalPPM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getVintageWineAccrued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grape","outputs":[{"internalType":"contract IGrape","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grapeResetCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract Vintner","name":"_vintner","type":"address"},{"internalType":"contract Upgrade","name":"_upgrade","type":"address"},{"internalType":"contract VintageWine","name":"_vintageWine","type":"address"},{"internalType":"address","name":"_grape","type":"address"},{"internalType":"address","name":"_cellarAddress","type":"address"},{"internalType":"address","name":"_wineryProgression","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"numberOfStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownedUpgradeStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownedUpgradeStakesBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownedUpgradeStakesIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownedVintnerStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownedVintnerStakesBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownedVintnerStakesIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_vintnerIds","type":"uint256[]"}],"name":"reStakeRestedVintners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetFatigue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vintnerType","type":"uint256"},{"internalType":"uint256","name":"_masterVintnerType","type":"uint256"},{"internalType":"uint256","name":"_fatigue","type":"uint256"}],"name":"restingTimeCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"restingVintners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_cellarAddress","type":"address"}],"name":"setCellarAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fatigueTuner","type":"uint256"}],"name":"setFatigueTuner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_grape","type":"address"}],"name":"setGrape","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_grapeResetCost","type":"uint256"}],"name":"setGrapeResetCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_unstakePenalty","type":"uint256"}],"name":"setUnstakePenalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract VintageWine","name":"_vintageWine","type":"address"}],"name":"setVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wineryProgression","type":"address"}],"name":"setWineryProgression","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_yieldPPS","type":"uint256"}],"name":"setYieldPPS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_vintnerIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_upgradeIds","type":"uint256[]"}],"name":"stakeMany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakedUpgrades","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakedVintners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"startTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_fatigue","type":"uint256"},{"internalType":"uint256","name":"_fatiguePerMinute","type":"uint256"}],"name":"timeUntilFatiguedCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalPPM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakePenalty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_vintnerIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_upgradeIds","type":"uint256[]"}],"name":"unstakeVintnersAndUpgrades","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upgrade","outputs":[{"internalType":"contract Upgrade","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"vintageWine","outputs":[{"internalType":"contract VintageWine","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_initialVintageWine","type":"uint256"},{"internalType":"uint256","name":"_deltaTime","type":"uint256"},{"internalType":"uint256","name":"_ppm","type":"uint256"},{"internalType":"uint256","name":"_modifier","type":"uint256"},{"internalType":"uint256","name":"_fatigue","type":"uint256"},{"internalType":"uint256","name":"_fatiguePerMinute","type":"uint256"},{"internalType":"uint256","name":"_yieldPPS","type":"uint256"}],"name":"vintageWineAccruedCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"vintner","outputs":[{"internalType":"contract Vintner","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wineryFatigue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wineryProgression","outputs":[{"internalType":"contract IWineryProgression","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wineryVintageWine","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_vintnerIds","type":"uint256[]"}],"name":"withdrawVintners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yieldPPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const WINEMAKER_PROGRESSION_ABI = [{"inputs":[{"internalType":"address","name":"_grape","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"skillPoints","type":"uint256"}],"name":"receivedSkillPoints","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"respec","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"skillGroup","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"skillLevel","type":"uint256"}],"name":"skillLearned","type":"event"},{"inputs":[],"name":"BURN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CELLAR_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FATIGUE_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MASTERVINTNER_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"MAX_SKILL_LEVEL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STORAGE_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADES_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VINTNERS_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseCostRespect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"burnSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cellarSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositGrape","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fatigueSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_player","type":"address"}],"name":"fixSkillPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getBurnSkillModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getCellarSkillModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getFatigueSkillModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getGrapeDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getGrapeToNextLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_masterVintnerNumber","type":"uint256"}],"name":"getMasterVintnerSkillModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getMaxLevelUpgrade","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getMaxNumberVintners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getSkillPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getSkillsLearned","outputs":[{"internalType":"uint256","name":"burn","type":"uint256"},{"internalType":"uint256","name":"fatigue","type":"uint256"},{"internalType":"uint256","name":"cellar","type":"uint256"},{"internalType":"uint256","name":"mastervintner","type":"uint256"},{"internalType":"uint256","name":"upgrades","type":"uint256"},{"internalType":"uint256","name":"vintners","type":"uint256"},{"internalType":"uint256","name":"vintageWineStorage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getVintageWineStorage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grape","outputs":[{"internalType":"contract IGrape","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"grapeDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"grapeLevels","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"masterVintnerSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxGrapeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetSkills","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_baseCostRespect","type":"uint256"}],"name":"setBaseCostRespect","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_grape","type":"address"}],"name":"setGrape","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_newValue","type":"uint256"}],"name":"setGrapeLevels","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setLevelStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setburnSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setcellarSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setfatigueSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setmasterVintnerSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setupgradesSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setvintageWineStorageSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setvintnersSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"skillPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"skillsLearned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_skillGroup","type":"uint256"},{"internalType":"uint256","name":"_skillLevel","type":"uint256"}],"name":"spendSkillPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"upgradesSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vintageWineStorageSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vintnersSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const WINEPRESS_ABI = [{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"},{"internalType":"uint256","name":"nDays_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"victim","type":"address"},{"indexed":false,"internalType":"address","name":"assassin","type":"address"},{"indexed":false,"internalType":"uint256","name":"profitGained","type":"uint256"}],"name":"Assassinated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"pendingTokens","type":"uint256"}],"name":"Compound","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numShares","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referr","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"treasury","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lotto","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claim","type":"uint256"}],"name":"FeesSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ILotto","name":"lotto_","type":"address"}],"name":"SetLotto","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxProfit","type":"uint256"}],"name":"SetMaxProfit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"SetTreasury","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"zapper_","type":"address"}],"name":"SetZapper","type":"event"},{"inputs":[],"name":"MAX_PROFIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimAmount","type":"uint256"}],"name":"adjustWithClaimFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"adminDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allAssassins","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"assassinate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"calculatePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateTrackedProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateTrackedProfitRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fetchAllAssassins","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchAllUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"fetchAllUsersNearAssassination","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotto","outputs":[{"internalType":"contract ILotto","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lottoFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partnerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"pendingShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referrerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"rewardsPerDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolFee_","type":"uint256"},{"internalType":"uint256","name":"rewardFee_","type":"uint256"},{"internalType":"uint256","name":"referrer_","type":"uint256"},{"internalType":"uint256","name":"treasury_","type":"uint256"},{"internalType":"uint256","name":"lotto_","type":"uint256"},{"internalType":"uint256","name":"claimFee_","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ILotto","name":"lotto_","type":"address"}],"name":"setLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxProfit","type":"uint256"}],"name":"setMaxProfit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"partnerAddress_","type":"address"}],"name":"setPartnerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"zapper_","type":"address"}],"name":"setZapper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferrerFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"totalTokenBalance","type":"uint256"},{"internalType":"uint256","name":"totalShareBalance","type":"uint256"},{"internalType":"uint256","name":"trackedTokenBalance","type":"uint256"},{"internalType":"uint256","name":"trackedShareBalance","type":"uint256"},{"internalType":"uint256","name":"claimPerSecond","type":"uint256"},{"internalType":"uint256","name":"lastClaim","type":"uint256"},{"internalType":"uint256","name":"profitsAssassinated","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"referrerFees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"name":"valueOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"valueOfAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAVAX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token_","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"contract IERC20","name":"token_","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minOut","type":"uint256"}],"name":"zapAndDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zapper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const VINEYARD_ABI = [{"inputs":[{"internalType":"address","name":"_wine","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accWinePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wine","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"winePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const GRAPE_TOKEN_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"INITIAL_AIRDROP_WALLET_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_GENESIS_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_GRAPE_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"address","name":"_grapePool","type":"address"},{"internalType":"address","name":"_airdropWallet","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"grapeOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_grapeOracle","type":"address"}],"name":"setGrapeOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const MIM_TOKEN_ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"address","name":"_vault","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"auth","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LogAddAuth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveHeight","type":"uint256"}],"name":"LogChangeMPCOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVault","type":"address"},{"indexed":true,"internalType":"address","name":"newVault","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveTime","type":"uint256"}],"name":"LogChangeVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txhash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"txhash","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swapin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bindaddr","type":"address"}],"name":"Swapout","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"applyMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"applyVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeMPCOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayMinter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"depositVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithTransferPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllMinters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"initVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minters","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mpc","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"revokeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setVaultOnly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}];
const VINT_TOKEN_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"NUM_PROMOTIONAL_VINTAGEWINE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NUM_VINTAGEWINE_AVAX_LP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NUM_VINTAGEWINE_USDC_LP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONE_VINTAGEWINE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDCLPVintageWineMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"avaxLPVintageWineMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cellarAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintAvaxLPVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mintPromotionalVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintUSDCLPVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"promotionalVintageWineMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cellarAddress","type":"address"}],"name":"setCellarAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numVintageWineAvaxLp","type":"uint256"}],"name":"setNumVintageWineAvaxLp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_upgradeAddress","type":"address"}],"name":"setUpgradeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wineryAddress","type":"address"}],"name":"setWineryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferForUpgradesFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferToCellar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upgradeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wineryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const SVINT_TOKEN_ABI = [{"inputs":[{"internalType":"contract VintageWine","name":"_vintageWine","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DELAYED_UNSTAKE_BURN_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DELAYED_UNSTAKE_LOCKUP_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"QUICK_UNSTAKE_BURN_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"QUICK_UNSTAKE_CONTRIBUTION_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimDelayedUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"frozenVintageWine","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_share","type":"uint256"}],"name":"prepareDelayedUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_share","type":"uint256"}],"name":"quickUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setStakeStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"unlockAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"unlockTimestamps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vintageWine","outputs":[{"internalType":"contract VintageWine","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vintageWineBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"}];
const WINE_MIM_LP_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

const VINT_LP = "0x1a3b20040dd5c890f247a5fb6c078b9943ffaa40";
const GRAPE_LP = "0xb382247667fe8ca5327ca1fa4835ae77a9907bc8";
// Winemaker game parameter constants
const CHAIN_ID = 43114;
const RESET_MULTI = 1;
const BASE_VPM = .05;
const YIELD_PPS = 833333333333333;
const MAX_UINT256 = "115792089237316195423570985008687907853269984665640564039429084007913129639935";

/*
 * Checks for a valid metamask instance and requests the account
 * Returns true if the user connected to the site
 */
const Web3Enabled = async () => {
	if(typeof window.ethereum !== "undefined") {
		await window.ethereum.request({method: 'eth_requestAccounts'}).then(function(result) {
			console.log("[SUCCESS] " + result);
		}, function(error) {
			console.log("[ERROR " + error.code + "] " + error.message);
			return false;
		});

		window.web3 = new Web3(window.ethereum);
		return true;
	} else {
		console.log("Metamask is not installed!");
	}
	return false;
}

/*
 * Checks to make sure we're on the right chain and if not
 * invoke a switch
 */
const switchNetwork = async(chainId) => {
	let currentChainId = window.web3.eth.net.getId();
	if(currentChainId !== chainId) {
		await window.ethereum.request(
		{
			method: 'wallet_switchEthereumChain',
			params: [{ chainId: window.web3.utils.toHex(chainId) }]
		});
	}
}

const getAllowance = async(owner, spender) => {
	// allowance test
	return await grapeOracle.methods.allowance(owner, spender).call({ from: owner });
}

var vintPrice;
var grapePrice;
var winePrice;
var svintRatio;
const getDataViaWeb3 = async (account) => {
	// Contract objects
	let winery = new window.web3.eth.Contract(WINEMAKER_REWARDS_ABI, WINEMAKER_REWARDS);
	let wineprog = new window.web3.eth.Contract(WINEMAKER_PROGRESSION_ABI, WINEMAKER_PROGRESSION);
	let winepress = new window.web3.eth.Contract(WINEPRESS_ABI, WINEPRESS);
	let vineyard = new window.web3.eth.Contract(VINEYARD_ABI, VINEYARD);
	let grape = new window.web3.eth.Contract(GRAPE_TOKEN_ABI, GRAPE_TOKEN);
	let vint = new window.web3.eth.Contract(VINT_TOKEN_ABI, VINT_TOKEN);
	let svint = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);
	let mim = new window.web3.eth.Contract(MIM_TOKEN_ABI, MIM_TOKEN);
	let wine_mim_lp = new window.web3.eth.Contract(WINE_MIM_LP_ABI, WINE_MIM_LP);

	// Refresh the UI
	refreshId = setInterval(async() => {

		// Get the currently accrued fatigue
		await winery.methods.getFatigueAccrued(account).call({from: account}).then(async(fatigue) => {
			// Convert to percentage
			let fatigueAccrued = fatigue/1e14;
			$("#fatigue").html((fatigueAccrued*100).toFixed(3) + "%");

			// Get the date and time, in locale time. that fatigue will reach 30%, and 100%
			await winery.methods.getTimeUntilFatigued(account).call( {from: account}).then(function(result) {
				let dt50 = new Date(0);
				let dt100 = new Date(0);

				dt50.setUTCSeconds((Date.now()/1000) + ((result - (Date.now()/1000)) * (0.5-fatigueAccrued)));
				dt100.setUTCSeconds(result);

				$("#fatiguedate50").html(dt50.toLocaleDateString() + ", " + dt50.toLocaleTimeString());
				$("#fatiguedate100").html(dt100.toLocaleDateString() + ", " + dt100.toLocaleTimeString());
			});

			// Get current and max VPM
			await winery.methods.getTotalPPM(account).call({from: account}).then(async(totalPPM) => { // totalPPM is our MAX VPM
				$("#resetCost").html((totalPPM * RESET_MULTI).toFixed(2) + " GRAPE");
				await winery.methods.getMasterVintnerNumber(account).call({from: account}).then(async(masterNum) => { // Number of staked masters
					// Update UI element
					$("#masters").html(masterNum + " vintners");
					// Get any modifiers to the VPM, with 100 being the no modifiers
					await wineprog.methods.getMasterVintnerSkillModifier(account, masterNum).call({from: account}).then(async(modifier) => {
						await winery.methods.startTimeStamp(account).call({from: account}).then(async(startTime) => { // Timestamp of when the vintners were last fully rested
							await winery.methods.fatiguePerMinute(account).call({from: account}).then(async(fatiguePM) => { // Fatigue per minute
								/*
									vintageWineAccruedCalculation(initialVintage, timePeriodInSecs, totalPPM, getMasterVinterSkillModifier(.., ..), currentFatigue, fatiguePerMinute, YIELD_PPS)
										this function lets you calculate how much vintage you will earn in a set period of time
										in this case we're using it to see how much we earn in one minute to get the dynamic VPM
								 */
								await winery.methods.vintageWineAccruedCalculation(0, 60, totalPPM, modifier, fatigue, fatiguePM, YIELD_PPS).call({from: account}).then(function(dynamicPPM) {
									// Update UI element
									$("#vpm").html((dynamicPPM/1e18).toFixed(2) + "/" + (totalPPM * (BASE_VPM * (modifier/100))).toFixed(2));
								});});});});});
			});
		});

		// Get the number of normal vintners
		await winery.methods.numberOfStaked(account, 0).call({from: account}).then(function(result) {
			$("#normals").html(result + " vintners");
		});

		// Get the amount of VINTAGE accrued in the reward contract
		await winery.methods.getVintageWineAccrued(account).call({from: account}).then(async(claimable) => {
			let vintEarned = (claimable / 1e18);
			// Get the balance of mim in the LP
			await mim.methods.balanceOf(VINT_LP).call({from: account}).then(async(mimSupply) => {
				// Get the balance of VINTAGE in the LP
				await vint.methods.balanceOf(VINT_LP).call({from: account}).then(async(vintSupply) => {
					// Calculate the price of the VINTAGE
					vintPrice = (mimSupply/vintSupply);
					$("#vintage").html(vintEarned.toFixed(2) + " $VINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (vintEarned * vintPrice).toFixed(2) + " USD</div>");
					
					// Get the maximum storage and show how much is used
					await wineprog.methods.getVintageWineStorage(account).call( {from: account} ).then(function(result) {
						$("#storage").html(vintEarned.toFixed(0) + "/" + (window.web3.utils.toBN(result) / 1e18).toFixed(0));
					});

					// Get the price of GRAPE
					await mim.methods.balanceOf(GRAPE_LP).call({from: account}).then(async(mimSupply2) => {
						await grape.methods.balanceOf(GRAPE_LP).call({from: account}).then(function(grapeSupply) {
							// Calculate the grape price, as well as the price of 50 grape, and the ratio of vint to grape
							grapePrice = (mimSupply2/grapeSupply);
							let fiftyGrape = 50 * grapePrice;
							let ratio = (vintPrice / grapePrice) * 100;
							
							// Calculate tool costs
							let mag = (20*grapePrice) + (300*vintPrice);
							let shears = (50*grapePrice) + (600*vintPrice);
							let hydro = (80*grapePrice) + (1000*vintPrice);
							
							$("#vintageprice").html("$" + (vintPrice).toFixed(4) + " USD (" + ((vintPrice / grapePrice)*100).toFixed(2) + "%)");
							$("#grapeprice").html("$" + grapePrice.toFixed(4) + " USD");
							$("#grapetovint").html((fiftyGrape/vintPrice).toFixed(2) + " $VINTAGE");
							$("#magazine").html("$" + mag.toFixed(2) + " USD");// + " ($" + (fiftyGrape - mag).toFixed(2) + ")");
							$("#shears").html("$" + shears.toFixed(2) + " USD");// + " ($" + (fiftyGrape*3 - shears).toFixed(2) + ")<br>");
							$("#hydro").html("$" + hydro.toFixed(2) + " USD");// + " ($" + (fiftyGrape*5 - hydro).toFixed(2) + ")");
						});
					});
				});
			});
		});
		// End update winery ui
		// Start update cellar ui
		// Get the ratio of svint to vint in the cellar
		await svint.methods.totalSupply().call({from: account}).then(async(svintSupply) => {
			svint.methods.vintageWineBalance().call({from: account}).then(function(vintageInCellar) {
				svintRatio = window.web3.utils.toBN(vintageInCellar) / window.web3.utils.toBN(svintSupply);
				$("#cellarratio").html(svintRatio.toFixed(2) + "x");
			});
		});
		
		// Get the vintage balance
		await vint.methods.balanceOf(account).call({from: account}).then(function(balance) {
			$("#vintinwallet").html((balance/1e18).toFixed(2) + " $VINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((balance/1e18) * vintPrice).toFixed(2) + " USD</div>");
		});
		// Get the svintage balance
		await svint.methods.balanceOf(account).call({from: account}).then(function(balance) {
			$("#svintinwallet").html((balance/1e18).toFixed(2) + " $sVINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((balance/1e18) * svintRatio * vintPrice).toFixed(2) + " USD</div>");
		});
		// Get the svintage in the vinyard
		await vineyard.methods.userInfo(7,account).call({from: account}).then(function(userInfo) {
			let amount = (window.web3.utils.toBN(userInfo['amount'])/1e18);
			$("#svintinvinyard").html(amount.toFixed(2) + " $sVINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (amount * svintRatio * vintPrice).toFixed(2) + " USD</div>");
		});
		// Get the pending wine rewards from the pool
		await vineyard.methods.pendingShare(7,account).call({from: account}).then(function(balance) {
			$("#pendingwine").html((balance/1e18).toFixed(2) + " $WINE");
		});
		// Get the pending svintage to be unlocked
		await svint.methods.unlockAmounts(account).call({from: account}).then(function(amount) {
			$("#cel-pendingamounts").html((amount / 1e18).toFixed(2) + " $VINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((amount / 1e18) * vintPrice).toFixed(2) + " USD</div>");
		});
		// Get the timestamp for when the svintage will be unlocked and claimable
		await svint.methods.unlockTimestamps(account).call({from: account}).then(function(timestamp) {
			let dt = new Date(0);
			let now = Date.now()/1000;
			dt.setUTCSeconds(timestamp);
			$("#cel-pendingtimestamps").html(dt.toLocaleDateString() + ", " + dt.toLocaleTimeString());			
			// Grey out the button if the timestamp hasn't been reached yet
			// I have not been able to get this to work...if you can see why, please tell me on this discord @crypto_neo
			/*if(timestamp < now) {				
				$("#cel-claimpending").css("backgroundColor", "#777777");
				$("#cel-claimpending").css("color", "#BABABA");
			} else {				
				$("#cel-claimpending").css("backgroundColor", "");
				$("#cel-claimpending").css("color", "");
			}*/
		});
		// End update cellar ui
		// Start update winepress ui
		// Get the value of 1 WINE-MIM-LP
		let wine_mim_lp_value = 0;
		await wine_mim_lp.methods.totalSupply().call({from: account}).then(async(totalSupply) => {
			await mim.methods.balanceOf(WINE_MIM_LP).call({from: account}).then(function(mimLPbal) {
				wine_mim_lp_value = ((mimLPbal / totalSupply)*2);
				$("#wp-lpvalue").html("$" + wine_mim_lp_value.toFixed(2) + " USD");
			});
		});
		
		// Get the tracked balance, compounded balance, and assassination risk
		await winepress.methods.calculateTrackedProfit(account).call({from: account}).then(async(currentProfit) => {
			await winepress.methods.userInfo(account).call({from: account}).then(function(userInfo) {
				// These calculations are from the smart contract
				let trackedBalance = window.web3.utils.toBN(userInfo['trackedTokenBalance']);
				let totalBalance = window.web3.utils.toBN(userInfo['totalTokenBalance']);
				let compoundedBalance = trackedBalance - totalBalance;
				let profitRatio = (currentProfit * 10e18) / trackedBalance;
				let expectedProfit = (trackedBalance * (3.5 * 10e18)) / 10e18;
				let profitDifference = currentProfit - expectedProfit;
				let risk = ((1.0 - (Math.abs(profitDifference) / expectedProfit)) * 100).toFixed(2);

				// Update UI elements
				$("#wp-trackedBalance").html((trackedBalance/1e18).toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((trackedBalance/1e18)*wine_mim_lp_value).toFixed(2) + " USD</div>");
				$("#wp-compoundedBalance").html((compoundedBalance / 1e18).toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((compoundedBalance/1e18)*wine_mim_lp_value).toFixed(2) + " USD</div>");
				
				$("#wp-assassinationrisk").html(risk + "%/100%");
				// < 90% green, < 100% orange, 100% or more is red
				if(risk <= 90) {
					$("#wp-assassinationrisk").css({"color": "#00FF00"});
				} else if(risk < 100) {
					$("#wp-assassinationrisk").css({"color": "#FFBA00"});
				} else {
					$("#wp-assassinationrisk").css({"color": "#FF0000"});
				}
			});
		});
		
		// Get the pending rewards
		await winepress.methods.pendingRewards(account).call({from: account}).then(function(pendingRewards) {
			let pendingBalance = (window.web3.utils.toBN(pendingRewards)/1e18);
			let pendingValue = pendingBalance * wine_mim_lp_value;
			$("#wp-pendingRewards").html(pendingBalance.toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + pendingValue.toFixed(2) + " USD</div>");
		});
		
		// Get the rewards per day
		await winepress.methods.rewardsPerDay(account).call({from: account}).then(function(dailyRewards) {
			let dailyProjected = window.web3.utils.toBN(dailyRewards)/1e18;
			let dailyValue = dailyProjected * wine_mim_lp_value;
			$("#wp-dailyRewards").html(dailyProjected.toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + dailyValue.toFixed(2) + " USD</div>");
		});
		// End update winepress ui
	}, 7500);
}

const callRPC = async(fromAddr, toAddr, rpc_method, rpc_data) => {
	funcId = window.web3.utils.keccak256(rpc_method).substring(0,10);
	funcData = funcId;
	if(rpc_data.length > 0) {
		for(const d of rpc_data) {
			funcData += window.web3.utils.stripHexPrefix(window.web3.utils.padLeft(d, 64));
		}
	}
	return await window.ethereum.request({ method: 'eth_call', params: [{ from: fromAddr, to: toAddr, data: funcData }]});
};

// This code is equivilent to code in getDataViaWeb3, please refer to that function for comments until I can
// copy them and make everything 1:1
const getDataViaRpc = async(account) => {
	refreshId = setInterval(async() => {

	// Winery RPC calls
	await callRPC(account, WINEMAKER_REWARDS, "getFatigueAccrued(address)", [ account ]).then(async(fatigue) => {
		let fatigueAccrued = fatigue/1e14;
		$("#fatigue").html((fatigueAccrued*100).toFixed(3) + "%");
		await callRPC(account, WINEMAKER_REWARDS, "getTimeUntilFatigued(address)", [ account ]).then(function(result) {
			let dt50 = new Date(0);
			let dt100 = new Date(0);

			dt50.setUTCSeconds((Date.now()/1000) + ((result - (Date.now()/1000)) * (0.5-fatigueAccrued)));
			dt100.setUTCSeconds(result);

			$("#fatiguedate50").html(dt50.toLocaleDateString() + ", " + dt50.toLocaleTimeString());
			$("#fatiguedate100").html(dt100.toLocaleDateString() + ", " + dt100.toLocaleTimeString());
		});

		await callRPC(account, WINEMAKER_REWARDS, "getTotalPPM(address)", [ account ]).then(async(totalPPM) => {
			$("#resetCost").html((totalPPM * RESET_MULTI).toFixed(2) + " GRAPE");
			await callRPC(account, WINEMAKER_REWARDS, "getMasterVintnerNumber(address)", [ account ]).then(async(masterNumber) => {
				await callRPC(account, WINEMAKER_PROGRESSION, "getMasterVintnerSkillModifier(address,uint256)", [ account, masterNumber ]).then(async(modifier) => {
					$("#masters").html(window.web3.utils.toNumber(masterNumber) + " vintners");
					await callRPC(account, WINEMAKER_REWARDS, "startTimeStamp(address)", [ account ]).then(async(startTime) => {
						await callRPC(account, WINEMAKER_REWARDS, "fatiguePerMinute(address)", [ account ]).then(async(fatiguePM) => {
							await callRPC(account, WINEMAKER_REWARDS, "vintageWineAccruedCalculation(uint256,uint256,uint256,uint256,uint256,uint256,uint256)", [ 0, 60, totalPPM, modifier, fatigue, fatiguePM, YIELD_PPS ]).then(function(dynamicPPM) {
								$("#vpm").html((dynamicPPM/1e18).toFixed(2) + "/" + (totalPPM * BASE_VPM * (modifier/100)).toFixed(2));
							});
						});
					});
				});
			});
		});
	});

	await callRPC(account, WINEMAKER_REWARDS, "numberOfStaked(address,uint256)", [ account, 0 ]).then(function(result) {
		$("#normals").html(window.web3.utils.toNumber(result) + " vintners");
	});

	await callRPC(account, WINEMAKER_REWARDS, "getVintageWineAccrued(address)", [ account ]).then(async(claimable) => {
		let vintEarned = (claimable / 1e18);
		await callRPC(account, MIM_TOKEN, "balanceOf(address)", [ VINT_LP ]).then(async(mimSupply) => {
			await callRPC(account, VINT_TOKEN, "balanceOf(address)", [ VINT_LP ]).then(async(vintSupply) => {
				// Calculate the price of the VINTAGE
				vintPrice = (mimSupply/vintSupply);
				// Update the UI
				$("#vintage").html(vintEarned.toFixed(2) + " $VINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (vintEarned * vintPrice).toFixed(2) + " USD</div>");
				await callRPC(account, WINEMAKER_PROGRESSION, "getVintageWineStorage(address)", [ account ]).then(function(storage) {
					$("#storage").html(vintEarned.toFixed(0) + "/" + (window.web3.utils.toBN(storage) / 1e18).toFixed(0));
				});
				await callRPC(account, MIM_TOKEN, "balanceOf(address)", [ GRAPE_LP ]).then(async(mimSupply2) => {
					await callRPC(account, GRAPE_TOKEN, "balanceOf(address)", [ GRAPE_LP ]).then(function(grapeSupply) {
						grapePrice = (mimSupply2/grapeSupply);
						let fiftyGrape = 50 * grapePrice;
						let ratio = (vintPrice / grapePrice) * 100;
						// Update the UI
						let mag = (20*grapePrice) + (300*vintPrice);
						let shears = (50*grapePrice) + (600*vintPrice);
						let hydro = (80*grapePrice) + (1000*vintPrice);
						$("#vintageprice").html("$" + (vintPrice).toFixed(4) + " USD (" + ((vintPrice / grapePrice)*100).toFixed(2) + "%)");
						$("#grapeprice").html("$" + grapePrice.toFixed(4) + " USD");
						$("#grapetovint").html((fiftyGrape/vintPrice).toFixed(2) + " $VINTAGE");
						$("#magazine").html("$" + mag.toFixed(2) + " USD");// + " ($" + (fiftyGrape - mag).toFixed(2) + ")");
						$("#shears").html("$" + shears.toFixed(2) + " USD");// + " ($" + (fiftyGrape*3 - shears).toFixed(2) + ")<br>");
						$("#hydro").html("$" + hydro.toFixed(2) + " USD");// + " ($" + (fiftyGrape*5 - hydro).toFixed(2) + ")");
					});
				});
			});
		});
	});

	// Cellar RPC calls

	await callRPC(account, SVINT_TOKEN, "totalSupply()", []).then(async(svintSupply) => {
		await callRPC(account, SVINT_TOKEN, "vintageWineBalance()", { }).then(function(vintageInCellar) {
			svintRatio = window.web3.utils.toBN(vintageInCellar) / window.web3.utils.toBN(svintSupply);
			$("#cellarratio").html(svintRatio.toFixed(2) + "x");
		});
	});

	// Wallet VINTAGE balance
	await callRPC(account, VINT_TOKEN, "balanceOf(address)", [ account ]).then(function(balance) {
		$("#vintinwallet").html((balance/1e18).toFixed(2) + " $VINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((balance/1e18) * vintPrice).toFixed(2) + " USD</div>");
	});

	// Wallet sVINTAGE balance
	await callRPC(account, SVINT_TOKEN, "balanceOf(address)", [ account ]).then(function(balance) {
		$("#svintinwallet").html((balance/1e18).toFixed(2) + " $sVINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((balance/1e18) * svintRatio * vintPrice).toFixed(2) + " USD</div>");
	});

	// Vinyard sVINTAGE balance
	await callRPC(account, VINEYARD, "userInfo(uint256,address)", [ 7, account ]).then(function(userInfo) {
		amount = window.web3.utils.toBN(userInfo.substring(2,66))/1e18;
		$("#svintinvinyard").html(amount.toFixed(2) + " $sVINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (amount * svintRatio * vintPrice).toFixed(2) + " USD</div>");
	});

	await callRPC(account, VINEYARD, "pendingShare(uint256,address)", ['7', account]).then(function(balance) {
		$("#pendingwine").html((balance/1e18).toFixed(2) + " $WINE");
	});

	await callRPC(account, SVINT_TOKEN, "unlockAmounts(address)", [ account ]).then(function(amount) {
		$("#cel-pendingamounts").html((amount / 1e18).toFixed(2) + " $VINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((amount / 1e18) * vintPrice).toFixed(2) + " USD</div>");
	});

	// Winepress RPC calls
	await callRPC(account, SVINT_TOKEN, "unlockTimestamps(address)", [ account ]).then(function(timestamp) {
		let dt = new Date(0);
		let now = Date.now() / 1000;
		dt.setUTCSeconds(timestamp);
		$("#cel-pendingtimestamps").html(dt.toLocaleDateString() + ", " + dt.toLocaleTimeString());
		/*if(timestamp < now) {
			$("#cel-claimpending").css("backgroundColor", "#777777");
			$("#cel-claimpending").css("color", "#BABABA")
		} else {
			$("#cel-claimpending").css("backgroundColor", "");
			$("#cel-claimpending").css("color", "")
		}*/
	});

	let wine_mim_lp_value = 0;
	await callRPC(account, WINE_MIM_LP, "totalSupply()", [ ]).then(async(totalSupply) => {
		await callRPC(account, MIM_TOKEN, "balanceOf(address)", [ WINE_MIM_LP ]).then(function(mimLPbal) {
			wine_mim_lp_value = ((mimLPbal / totalSupply)*2);
			$("#wp-lpvalue").html("$" + wine_mim_lp_value.toFixed(2) + " USD");
		});
	});

	await callRPC(account, WINEPRESS, "calculateTrackedProfit(address)", [ account ]).then(async(currentProfit) => {
		await callRPC(account, WINEPRESS, "userInfo(address)", [ account ]).then(function(userInfo) {
			let trackedBalance = window.web3.utils.toBN(userInfo.substring(258, 258+64));
			let totalBalance = window.web3.utils.toBN(userInfo.substring(194, 194+64));
			let compoundedBalance = trackedBalance - totalBalance;
			let profitRatio = (currentProfit * 10e18) / trackedBalance;
			let expectedProfit = (trackedBalance * (3.5 * 10e18)) / 10e18;
			let profitDifference = currentProfit - expectedProfit;
			let risk = ((1.0 - (Math.abs(profitDifference) / expectedProfit)) * 100).toFixed(2);

			// Update UI elements
			$("#wp-trackedBalance").html((trackedBalance/1e18).toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((trackedBalance/1e18)*wine_mim_lp_value).toFixed(2) + " USD</div>");
			$("#wp-compoundedBalance").html((compoundedBalance / 1e18).toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((compoundedBalance/1e18)*wine_mim_lp_value).toFixed(2) + " USD</div>");

			if(risk <= 90) {
				$("#wp-assassinationrisk").css({"color": "#00FF00"});
			} else if(risk < 100) {
				$("#wp-assassinationrisk").css({"color": "#FFBA00"});
			} else {
				$("#wp-assassinationrisk").css({"color": "#FF0000"});
			}
			$("#wp-assassinationrisk").text(risk + "%");
		});
	});

	await callRPC(account, WINEPRESS, "rewardsPerDay(address)", [ account ]).then(function(dailyRewards) {
		let dailyProjected = window.web3.utils.toBN(dailyRewards)/1e18;
		let dailyValue = dailyProjected * wine_mim_lp_value;
		$("#wp-dailyRewards").html(dailyProjected.toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + dailyValue.toFixed(2) + " USD</div>");
	});

	await callRPC(account, WINEPRESS, "pendingRewards(address)", [ account ]).then(function(pendingRewards) {
		let pendingBalance = (window.web3.utils.toBN(pendingRewards)/1e18);
		let pendingValue = pendingBalance * wine_mim_lp_value;
		$("#wp-pendingRewards").html(pendingBalance.toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>$" + pendingValue.toFixed(2) + " USD</div>");
	});

}, 7500);
};

var refreshId = null;
/*
	Updates the information on the dashboard using RPC calls
*/
const rpcQuery = async() => {
	window.web3 = new Web3(window.ethereum);
	if(refreshId !== null) {
		clearInterval(refreshId);
	}
	let account = $("#addressEntry").val();
	if(account !== "" && window.web3.utils.isAddress(account)) {
		$("#address").html(account);
		getDataViaRpc(account);
	}
};

/*
	Updates the information on the dashboard using direct contract calls
*/
const web3Query = async () => {
	if(refreshId !== null) {
		clearInterval(refreshId);
	}
	if(await Web3Enabled()) { // Initialize web3 and connected to metamask
		await switchNetwork(CHAIN_ID); // Make sure we're on the c-chain

		window.web3.eth.getAccounts().then(function(accounts) {
			$("#address").html(accounts[0]);
			getDataViaWeb3(accounts[0]);
		});
	}
}

/*
	Reset fatigue using GRAPE
*/
const resetFatigue = async() => {
	let grape = new window.web3.eth.Contract(GRAPE_TOKEN_ABI, GRAPE_TOKEN);
	let winery = new window.web3.eth.Contract(WINEMAKER_REWARDS_ABI, WINEMAKER_REWARDS);
	window.web3.eth.getAccounts().then(function(result) {
		let account = result[0];
		winery.methods.getTotalPPM(account).call({from: account}).then(async(totalPPM) => {
			reset_cost = totalPPM * RESET_MULTI * 1e18;
			console.log("Reset Cost: " + reset_cost);
			await grape.methods.balanceOf(account).call({from: account}).then(async(balance) => {
				console.log("Balance   : " + balance);
				await grape.methods.allowance(account, WINEMAKER_REWARDS).call({from: account }).then(async(allowance) => {
					if(window.web3.utils.toBN(balance).lt(window.web3.utils.toBN(reset_cost))) {
						console.error("[ERROR] Insufficient GRAPE balance to reset, " + (balance/1e18).toFixed(0) + "/" + (reset_cost/1e18).toFixed(0));
						return;
					}
					
					console.log("Allowance: " + (allowance));
					if(window.web3.utils.toBN(allowance).lt(window.web3.utils.toBN(totalPPM * RESET_MULTI))) {
						await grape.methods.approve(WINEMAKER_REWARDS, MAX_UINT256).send({from: account});
					}
					await winery.methods.resetFatigue().send({from: account});
				});
			});
		});
	});
}

/*
	 Claim vintage from the winemaker game
*/
const claimVintage = async() => {
	let winery = new window.web3.eth.Contract(WINEMAKER_REWARDS_ABI, WINEMAKER_REWARDS);
	window.web3.eth.getAccounts().then(function(result) {
		let account = result[0];
		winery.methods.claimVintageWine().send({from: account});
	});
};

/*
	Deposits ALL of the VINTAGE available in your wallet into the cellar
*/
const depositVintage = async() => {
	let tokenA = new window.web3.eth.Contract(VINT_TOKEN_ABI, VINT_TOKEN);
	let tokenB = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);
	window.web3.eth.getAccounts().then(async(result) => {
		let account = result[0];
		//await tokenA.methods.allowance(account, SVINT_TOKEN).call({from: account }).then(async(allowance) => {
			//console.log("Allowance: " + (allowance));
			await tokenA.methods.balanceOf(account).call({from: account}).then(async(balance) => {
				if((balance / 1e18) > 0) {
					//if(window.web3.utils.toBN(allowance).lt(window.web3.utils.toBN(MAX_UINT256))) {
					//	await tokenA.methods.approve(SVINT_TOKEN, MAX_UINT256).send({from: account});
					//}
					console.log("Depositing " + (balance / 1e18) + " Vintage");
					await tokenB.methods.stake(balance).send({from: account});
				} else {
					console.error("[ERROR] Vintage balance must be greater than 0");
				}
			});
		//});
	});
};

const stakeSVintage = async() => {
	let token = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);
	let vineyard = new window.web3.eth.Contract(VINEYARD_ABI, VINEYARD);
	window.web3.eth.getAccounts().then(async(result) => {
		let account = result[0];
		await token.methods.allowance(account, VINEYARD).call({from: account}).then(async(allowance) => {
			console.log("Allowance: " + (allowance));
			await token.methods.balanceOf(account).call({from: account}).then(async(balance) => {
				if((balance / 1e18) > 0) {
					if(window.web3.utils.toBN(allowance).lt(window.web3.utils.toBN(MAX_UINT256))) {
						await token.methods.approve(VINEYARD, MAX_UINT256).send({from: account});
					}
					console.log("Staking " + (balance / 1e18) + " SVintage");
					vineyard.methods.deposit(7, balance).send({from: account});
				} else {
					console.error("[ERROR] SVintage balance must be greater than 0");
				}
			});
		});
	});
};

const unstakeSVintage = async() => {
	let vineyard = new window.web3.eth.Contract(VINEYARD_ABI, VINEYARD);
	window.web3.eth.getAccounts().then(function(result) {
		let account = result[0];
		vineyard.methods.userInfo(7, account).call({from: account}).then(function(userInfo) {
			let balance = userInfo['amount'];
			console.log("Withdrawing " + (balance / 1e18) + " SVintage");
			vineyard.methods.withdraw(7, balance).send({from: account});
		});
	});
};

const withdrawVintage = async() => {
	let token = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);
	window.web3.eth.getAccounts().then(function(result) {
		let account = result[0];
		token.methods.balanceOf(account).call({from: account}).then(function(balance) {
			console.log("Preparing delayed unstake of " + (balance / 1e18) + " SVintage");
			token.methods.prepareDelayedUnstake(balance).send({from: account});
		});
	});
};

const claimVineyardRewards = async() => {
	let vineyard = new window.web3.eth.Contract(VINEYARD_ABI, VINEYARD);
	window.web3.eth.getAccounts().then(function(result) {
		let account = result[0];
		vineyard.methods.withdraw(7,0).send({from: account});
	});
}

const claimPendingFromCellar = async() => {
	let token = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);
	window.web3.eth.getAccounts().then(function(result) {
		let account = result[0];
		token.methods.unlockTimestamps(account).call({from: account}).then(async(timestamp) => {
			let now = Date.now() / 1000;
			if(now >= timestamp) {				
				token.methods.unlockAmounts(account).call({from: account}).then(function(balance) {					
					console.log("Preparing to claim " + (balance / 1e18) + " Vintage");
					token.methods.claimDelayedUnstake(balance).send({from: account});
				});
			} else {
				console.error("[ERROR] You cannot claim your pending rewards...yet");
			}
		});
	});
}

/*
	Claims rewards from the winepress without compounding
	Subject to 5% tax, compounding is not taxed
*/
const claimWinepress = async() => {
	let winepress = new window.web3.eth.Contract(WINEPRESS_ABI, WINEPRESS);
	window.web3.eth.getAccounts().then(function(result) {
		let account = result[0];
		winepress.methods.claim().send({from: account});
	});
};

/*
	Compound rewards from the winepress
	Not taxed
*/
const compoundWinepress = async() => {
	let winepress = new window.web3.eth.Contract(WINEPRESS_ABI, WINEPRESS);
	window.web3.eth.getAccounts().then(function(result) {
		let account = result[0];
		winepress.methods.compound().send({from: account});
	});
};

// Panel handlers
function showWineryPanel() {
	$("#CellarPanel").animate({ opacity: 0 }).after(function() { $("#CellarPanel").css('display', 'none') } );
	$("#PressPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PressPanel").css('display', 'none') } );
	$("#WineryPanel").css('display', 'block');
	$("#WineryPanel").animate({ opacity: 1, zindex: 1 });
}

function showCellarPanel() {
	$("#WineryPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#WineryPanel").css('display', 'none') } );
	$("#PressPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PressPanel").css('display', 'none') } );
	$("#CellarPanel").css('display', 'block');
	$("#CellarPanel").animate({ opacity: 1, zindex: 1 });
}

function showPressPanel() {
	$("#CellarPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#CellarPanel").css('display', 'none') } );
	$("#WineryPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#WineryPanel").css('display', 'none') } );
	$("#PressPanel").css('display', 'block');
	$("#PressPanel").animate({ opacity: 1, zindex: 1 });
}

web3Query();