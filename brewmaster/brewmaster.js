// Compilation of contract addresses
const WINEMAKER_REWARDS = "0xae1de1c258c5587cfea69045992a5467cff4406f";
const WINEMAKER_PROGRESSION = "0x46840fedbafaf7ad2b9b6395421662ee9279349f";
const WINEPRESS = "0x2707ccc10d6c1ce49f72867ab5b85de11e64979f";
const VINEYARD = "0x28c65dcB3a5f0d456624AFF91ca03E4e315beE49"
const GRAPE_TOKEN = "0x5541D83EFaD1f281571B343977648B75d95cdAC2";
const MIM_TOKEN = "0x130966628846bfd36ff31a822705796e8cb8c18d";
const VINT_TOKEN = "0x01Af64EF39AEB5612202AA07B3A3829f20c395fd";
const WINE_TOKEN = "0xC55036B5348CfB45a932481744645985010d3A44";
const SVINT_TOKEN = "0xf016e69F2c08a0b743a7d815d1059318DCa8Fc0e";
const WINE_MIM_LP = "0x00cb5b42684da62909665d8151ff80d1567722c3";
const PEG_HEALTH_CAMPAIGN = "0xde18bD8EC77692dC29608DFe962D65eC6B84161d";
const GRAPE_NODES = "0xd77b0756bE406a6a78d47285EDD59234D781D568";
const XGRAPE_TOKEN = "0x95CED7c63eA990588F3fd01cdDe25247D04b8D98";
const SODAPRESS = "0x369E556F0e7A08E781527D161DaC867bb05fA597";
const GRAPE_XGRAPE_LP = "0xE00b91F35924832D1a7d081d4DCed55f3b80FB5C";

const WINEMAKER_REWARDS_ABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"CLAIM_VINTAGEWINE_BURN_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CLAIM_VINTAGEWINE_CONTRIBUTION_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEAD_ADDR","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FATIGUE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_maxSize","type":"uint256"}],"name":"batchedStakesOfOwner","outputs":[{"components":[{"internalType":"uint256","name":"vintnerId","type":"uint256"},{"internalType":"uint256","name":"vintnerPPM","type":"uint256"},{"internalType":"bool","name":"isResting","type":"bool"},{"internalType":"uint256","name":"endTimestamp","type":"uint256"}],"internalType":"struct Winery.StakedVintnerInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_maxSize","type":"uint256"}],"name":"batchedToolsOfOwner","outputs":[{"components":[{"internalType":"uint256","name":"toolId","type":"uint256"},{"internalType":"uint256","name":"toolPPM","type":"uint256"}],"internalType":"struct Winery.StakedToolInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cellarAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"fatiguePerMinute","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ppm","type":"uint256"}],"name":"fatiguePerMinuteCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"fatigueTuner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getFatigueAccrued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getFatiguePerMinuteWithModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getMasterVintnerNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"}],"name":"getRestingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTimeUntilFatigued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTotalPPM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getVintageWineAccrued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grape","outputs":[{"internalType":"contract IGrape","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grapeResetCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract Vintner","name":"_vintner","type":"address"},{"internalType":"contract Upgrade","name":"_upgrade","type":"address"},{"internalType":"contract VintageWine","name":"_vintageWine","type":"address"},{"internalType":"address","name":"_grape","type":"address"},{"internalType":"address","name":"_cellarAddress","type":"address"},{"internalType":"address","name":"_wineryProgression","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"numberOfStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownedUpgradeStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownedUpgradeStakesBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownedUpgradeStakesIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownedVintnerStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownedVintnerStakesBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownedVintnerStakesIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_vintnerIds","type":"uint256[]"}],"name":"reStakeRestedVintners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetFatigue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vintnerType","type":"uint256"},{"internalType":"uint256","name":"_masterVintnerType","type":"uint256"},{"internalType":"uint256","name":"_fatigue","type":"uint256"}],"name":"restingTimeCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"restingVintners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_cellarAddress","type":"address"}],"name":"setCellarAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fatigueTuner","type":"uint256"}],"name":"setFatigueTuner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_grape","type":"address"}],"name":"setGrape","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_grapeResetCost","type":"uint256"}],"name":"setGrapeResetCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_unstakePenalty","type":"uint256"}],"name":"setUnstakePenalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract VintageWine","name":"_vintageWine","type":"address"}],"name":"setVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wineryProgression","type":"address"}],"name":"setWineryProgression","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_yieldPPS","type":"uint256"}],"name":"setYieldPPS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_vintnerIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_upgradeIds","type":"uint256[]"}],"name":"stakeMany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakedUpgrades","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakedVintners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"startTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_fatigue","type":"uint256"},{"internalType":"uint256","name":"_fatiguePerMinute","type":"uint256"}],"name":"timeUntilFatiguedCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalPPM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakePenalty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_vintnerIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_upgradeIds","type":"uint256[]"}],"name":"unstakeVintnersAndUpgrades","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upgrade","outputs":[{"internalType":"contract Upgrade","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"vintageWine","outputs":[{"internalType":"contract VintageWine","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_initialVintageWine","type":"uint256"},{"internalType":"uint256","name":"_deltaTime","type":"uint256"},{"internalType":"uint256","name":"_ppm","type":"uint256"},{"internalType":"uint256","name":"_modifier","type":"uint256"},{"internalType":"uint256","name":"_fatigue","type":"uint256"},{"internalType":"uint256","name":"_fatiguePerMinute","type":"uint256"},{"internalType":"uint256","name":"_yieldPPS","type":"uint256"}],"name":"vintageWineAccruedCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"vintner","outputs":[{"internalType":"contract Vintner","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wineryFatigue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wineryProgression","outputs":[{"internalType":"contract IWineryProgression","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wineryVintageWine","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_vintnerIds","type":"uint256[]"}],"name":"withdrawVintners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yieldPPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const WINEMAKER_PROGRESSION_ABI = [{"inputs":[{"internalType":"address","name":"_grape","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"skillPoints","type":"uint256"}],"name":"receivedSkillPoints","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"respec","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"skillGroup","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"skillLevel","type":"uint256"}],"name":"skillLearned","type":"event"},{"inputs":[],"name":"BURN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CELLAR_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FATIGUE_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MASTERVINTNER_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"MAX_SKILL_LEVEL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STORAGE_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADES_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VINTNERS_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseCostRespect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"burnSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cellarSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositGrape","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fatigueSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_player","type":"address"}],"name":"fixSkillPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getBurnSkillModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getCellarSkillModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getFatigueSkillModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getGrapeDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getGrapeToNextLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_masterVintnerNumber","type":"uint256"}],"name":"getMasterVintnerSkillModifier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getMaxLevelUpgrade","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getMaxNumberVintners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getSkillPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getSkillsLearned","outputs":[{"internalType":"uint256","name":"burn","type":"uint256"},{"internalType":"uint256","name":"fatigue","type":"uint256"},{"internalType":"uint256","name":"cellar","type":"uint256"},{"internalType":"uint256","name":"mastervintner","type":"uint256"},{"internalType":"uint256","name":"upgrades","type":"uint256"},{"internalType":"uint256","name":"vintners","type":"uint256"},{"internalType":"uint256","name":"vintageWineStorage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getVintageWineStorage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grape","outputs":[{"internalType":"contract IGrape","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"grapeDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"grapeLevels","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"masterVintnerSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxGrapeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetSkills","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_baseCostRespect","type":"uint256"}],"name":"setBaseCostRespect","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_grape","type":"address"}],"name":"setGrape","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_newValue","type":"uint256"}],"name":"setGrapeLevels","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setLevelStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setburnSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setcellarSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setfatigueSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setmasterVintnerSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setupgradesSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setvintageWineStorageSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setvintnersSkillValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"skillPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"skillsLearned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_skillGroup","type":"uint256"},{"internalType":"uint256","name":"_skillLevel","type":"uint256"}],"name":"spendSkillPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"upgradesSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vintageWineStorageSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vintnersSkillValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const WINEPRESS_ABI = [{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"},{"internalType":"uint256","name":"nDays_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"victim","type":"address"},{"indexed":false,"internalType":"address","name":"assassin","type":"address"},{"indexed":false,"internalType":"uint256","name":"profitGained","type":"uint256"}],"name":"Assassinated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"pendingTokens","type":"uint256"}],"name":"Compound","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numShares","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referr","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"treasury","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lotto","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claim","type":"uint256"}],"name":"FeesSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ILotto","name":"lotto_","type":"address"}],"name":"SetLotto","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxProfit","type":"uint256"}],"name":"SetMaxProfit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"SetTreasury","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"zapper_","type":"address"}],"name":"SetZapper","type":"event"},{"inputs":[],"name":"MAX_PROFIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimAmount","type":"uint256"}],"name":"adjustWithClaimFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"adminDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allAssassins","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"assassinate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"calculatePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateTrackedProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateTrackedProfitRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fetchAllAssassins","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchAllUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"fetchAllUsersNearAssassination","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotto","outputs":[{"internalType":"contract ILotto","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lottoFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partnerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"pendingShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referrerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"rewardsPerDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolFee_","type":"uint256"},{"internalType":"uint256","name":"rewardFee_","type":"uint256"},{"internalType":"uint256","name":"referrer_","type":"uint256"},{"internalType":"uint256","name":"treasury_","type":"uint256"},{"internalType":"uint256","name":"lotto_","type":"uint256"},{"internalType":"uint256","name":"claimFee_","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ILotto","name":"lotto_","type":"address"}],"name":"setLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxProfit","type":"uint256"}],"name":"setMaxProfit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"partnerAddress_","type":"address"}],"name":"setPartnerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"zapper_","type":"address"}],"name":"setZapper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferrerFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"totalTokenBalance","type":"uint256"},{"internalType":"uint256","name":"totalShareBalance","type":"uint256"},{"internalType":"uint256","name":"trackedTokenBalance","type":"uint256"},{"internalType":"uint256","name":"trackedShareBalance","type":"uint256"},{"internalType":"uint256","name":"claimPerSecond","type":"uint256"},{"internalType":"uint256","name":"lastClaim","type":"uint256"},{"internalType":"uint256","name":"profitsAssassinated","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"referrerFees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"name":"valueOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"valueOfAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAVAX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token_","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"contract IERC20","name":"token_","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minOut","type":"uint256"}],"name":"zapAndDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zapper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const VINEYARD_ABI = [{"inputs":[{"internalType":"address","name":"_wine","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accWinePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wine","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"winePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const GRAPE_TOKEN_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"INITIAL_AIRDROP_WALLET_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_GENESIS_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_GRAPE_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"address","name":"_grapePool","type":"address"},{"internalType":"address","name":"_airdropWallet","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"grapeOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_grapeOracle","type":"address"}],"name":"setGrapeOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const MIM_TOKEN_ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"address","name":"_vault","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"auth","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LogAddAuth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveHeight","type":"uint256"}],"name":"LogChangeMPCOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVault","type":"address"},{"indexed":true,"internalType":"address","name":"newVault","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveTime","type":"uint256"}],"name":"LogChangeVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txhash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"txhash","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swapin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bindaddr","type":"address"}],"name":"Swapout","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"applyMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"applyVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeMPCOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayMinter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"depositVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithTransferPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllMinters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"initVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minters","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mpc","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"revokeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setVaultOnly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}];
const VINT_TOKEN_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"NUM_PROMOTIONAL_VINTAGEWINE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NUM_VINTAGEWINE_AVAX_LP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NUM_VINTAGEWINE_USDC_LP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONE_VINTAGEWINE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDCLPVintageWineMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"avaxLPVintageWineMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cellarAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintAvaxLPVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mintPromotionalVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintUSDCLPVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintVintageWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"promotionalVintageWineMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cellarAddress","type":"address"}],"name":"setCellarAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numVintageWineAvaxLp","type":"uint256"}],"name":"setNumVintageWineAvaxLp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_upgradeAddress","type":"address"}],"name":"setUpgradeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wineryAddress","type":"address"}],"name":"setWineryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferForUpgradesFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferToCellar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upgradeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wineryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const WINE_TOKEN_ABI = [{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"}];
const SVINT_TOKEN_ABI = [{"inputs":[{"internalType":"contract VintageWine","name":"_vintageWine","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DELAYED_UNSTAKE_BURN_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DELAYED_UNSTAKE_LOCKUP_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"QUICK_UNSTAKE_BURN_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"QUICK_UNSTAKE_CONTRIBUTION_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimDelayedUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"frozenVintageWine","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_share","type":"uint256"}],"name":"prepareDelayedUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_share","type":"uint256"}],"name":"quickUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setStakeStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"unlockAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"unlockTimestamps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vintageWine","outputs":[{"internalType":"contract VintageWine","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vintageWineBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"}];
const WINE_MIM_LP_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const PEG_HEALTH_CAMPAIGN_ABI = [{"inputs":[{"internalType":"address","name":"wine","type":"address"},{"internalType":"address","name":"wineOracle","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIM","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Treasury","outputs":[{"internalType":"contract ITreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Wine","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WineOracle","outputs":[{"internalType":"contract IOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"assets","outputs":[{"internalType":"bool","name":"isAdded","type":"bool"},{"internalType":"uint256","name":"multiplier","type":"uint256"},{"internalType":"address","name":"oracle","type":"address"},{"internalType":"bool","name":"isLP","type":"bool"},{"internalType":"address","name":"pair","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bondVesting","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claimableWine","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"amnt","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWinePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getWineReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBuyback","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"redeemAssetsForBuyback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"isAdded","type":"bool"},{"internalType":"uint256","name":"multiplier","type":"uint256"},{"internalType":"address","name":"oracle","type":"address"},{"internalType":"bool","name":"isLP","type":"bool"},{"internalType":"address","name":"pair","type":"address"}],"name":"setAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discount","type":"uint256"},{"internalType":"uint256","name":"_vestingPeriod","type":"uint256"}],"name":"setBondParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wine","type":"address"}],"name":"setWine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"oracle","type":"address"}],"name":"setWineOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalVested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"vesting","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"period","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"}],"stateMutability":"view","type":"function"}];
const GRAPE_NODES_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"num","type":"uint256"}],"name":"CreateNode","type":"event"},{"inputs":[],"name":"MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"newDev","type":"address"}],"name":"changeDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newTreasury","type":"address"}],"name":"changeTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"compoundBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"numNodes","type":"uint256"}],"name":"create","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dev","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dripRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dripRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"amnt","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalancePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getDayDripEstimate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getDistributionRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"getNodes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardDrip","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalNodes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"getTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastDripTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"maxPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"numNodes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pegFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"setCompoundBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setDripRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"setLastDripTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addr","type":"address[]"},{"components":[{"internalType":"uint256","name":"total_deposits","type":"uint256"},{"internalType":"uint256","name":"total_claims","type":"uint256"},{"internalType":"uint256","name":"last_distPoints","type":"uint256"},{"internalType":"uint256","name":"alloc_points","type":"uint256"},{"internalType":"uint256","name":"compounds","type":"uint256"},{"internalType":"uint256","name":"nodes","type":"uint256"}],"internalType":"struct Node.User[]","name":"_user","type":"tuple[]"}],"name":"setManyUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"setPegFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tierAllocPoints","type":"uint256"},{"internalType":"uint256","name":"_tierAmounts","type":"uint256"}],"name":"setTierValues","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"setTreasuryFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tierAllocPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDistributePoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDistributeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalNodes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_deposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_users","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userIndices","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"total_deposits","type":"uint256"},{"internalType":"uint256","name":"total_claims","type":"uint256"},{"internalType":"uint256","name":"last_distPoints","type":"uint256"},{"internalType":"uint256","name":"alloc_points","type":"uint256"},{"internalType":"uint256","name":"compounds","type":"uint256"},{"internalType":"uint256","name":"nodes","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
const XGRAPE_TOKEN_ABI = [{"inputs":[{"internalType":"address","name":"underlying_","type":"address"},{"internalType":"address","name":"feeReceiver_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountTokensErased","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountTokensErased","type":"uint256"}],"name":"GarbageCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"previousPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"currentPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"PriceChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountMDB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBUSD","type":"uint256"}],"name":"Redeemed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"SellDownAccount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"}],"name":"SetFeeReceiver","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"SetFeeReceiverPercentage","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"mintFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"transferFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sellFee","type":"uint256"}],"name":"SetFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"Contract","type":"address"},{"indexed":false,"internalType":"bool","name":"feeExempt","type":"bool"}],"name":"SetPermissions","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newZapper","type":"address"}],"name":"SetZapper","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockNo","type":"uint256"}],"name":"TokenActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"activateToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"amountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"calculatePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"feeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeReceiverPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getValueOfHoldings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTransferFeeExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"mintWithBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"minOut","type":"uint256"}],"name":"mintWithNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"sell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"sell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"sellDownExternalAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setFeeReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"setFeeReceiverPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintFee","type":"uint256"},{"internalType":"uint256","name":"_transferFee","type":"uint256"},{"internalType":"uint256","name":"_sellFee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"Contract","type":"address"},{"internalType":"bool","name":"transferFeeExempt","type":"bool"}],"name":"setTransferFeeExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newZapper","type":"address"}],"name":"setZapper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"tokenActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"underlyingBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"}],"name":"withdrawNonStableToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zapper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
const SODAPRESS_ABI = [{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"},{"internalType":"uint256","name":"nDays_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"victim","type":"address"},{"indexed":false,"internalType":"address","name":"assassin","type":"address"},{"indexed":false,"internalType":"uint256","name":"profitGained","type":"uint256"}],"name":"Assassinated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"pendingTokens","type":"uint256"}],"name":"Compound","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numShares","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referr","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"treasury","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lotto","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claim","type":"uint256"}],"name":"FeesSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract ILotto","name":"lotto_","type":"address"}],"name":"SetLotto","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxProfit","type":"uint256"}],"name":"SetMaxProfit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"SetTreasury","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"zapper_","type":"address"}],"name":"SetZapper","type":"event"},{"inputs":[],"name":"MAX_PROFIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimAmount","type":"uint256"}],"name":"adjustWithClaimFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"uint256","name":"feesTaken","type":"uint256"}],"name":"adminDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allAssassins","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"assassinate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"calculatePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateTrackedProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateTrackedProfitRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimPenalty","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"compoundBonus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fetchAllAssassins","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchAllUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"fetchAllUsersNearAssassination","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotto","outputs":[{"internalType":"contract ILotto","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lottoFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partnerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"pendingShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referrerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"rewardsPerDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_compoundFlag","type":"bool"},{"internalType":"bool","name":"_claimFlag","type":"bool"}],"name":"setBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolFee_","type":"uint256"},{"internalType":"uint256","name":"rewardFee_","type":"uint256"},{"internalType":"uint256","name":"referrer_","type":"uint256"},{"internalType":"uint256","name":"treasury_","type":"uint256"},{"internalType":"uint256","name":"lotto_","type":"uint256"},{"internalType":"uint256","name":"claimFee_","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ILotto","name":"lotto_","type":"address"}],"name":"setLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxProfit","type":"uint256"}],"name":"setMaxProfit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"partnerAddress_","type":"address"}],"name":"setPartnerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"zapper_","type":"address"}],"name":"setZapper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferrerFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"totalTokenBalance","type":"uint256"},{"internalType":"uint256","name":"totalShareBalance","type":"uint256"},{"internalType":"uint256","name":"trackedTokenBalance","type":"uint256"},{"internalType":"uint256","name":"trackedShareBalance","type":"uint256"},{"internalType":"uint256","name":"claimPerSecond","type":"uint256"},{"internalType":"uint256","name":"lastClaim","type":"uint256"},{"internalType":"uint256","name":"profitsAssassinated","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"referrerFees","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"name":"valueOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"valueOfAccount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAVAX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token_","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"contract IERC20","name":"token_","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minOut","type":"uint256"}],"name":"zapAndDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zapper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const GRAPE_XGRAPE_LP_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

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

// Global variables
var vpm = 0, maxVPM = 0;
var fatigueAccrued = 0;
var dt50 = null, dt100 = null;
var resetCost = 0;
var masterCount = 0, normalCount = 0, toolCount = 0;
var vintEarned = 0;
var vintPrice = 0, grapePrice = 0, winePrice = 0;
var storage = 0, storageDt = null;
var ratio = 0;
var mag = 0; shears = 0, hydro = 0;


const updateGlobal = async(account) => {
	if(usingWeb3) {
		// Get the price of VINTAGE
		await mim.methods.balanceOf(VINT_LP).call({from: account}).then(async(mimSupply) => {
			// Get the balance of VINTAGE in the LP
			await vint.methods.balanceOf(VINT_LP).call({from: account}).then(async(vintSupply) => {
				// Calculate the price of the VINTAGE
				vintPrice = (mimSupply/vintSupply);
			});
		});
		
		// Get the price of GRAPE
		await mim.methods.balanceOf(GRAPE_LP).call({from: account}).then(async(mimSupply) => {
			await grape.methods.balanceOf(GRAPE_LP).call({from: account}).then(function(grapeSupply) {
				// Calculate the grape price, as well as the price of 50 grape, and the ratio of vint to grape
				grapePrice = (mimSupply/grapeSupply);
			});
		});

		// Get the price of WINE
		await mim.methods.balanceOf(WINE_MIM_LP).call({from: account}).then(async(mimSupply) => {
			await wine.methods.balanceOf(WINE_MIM_LP).call({from: account}).then(function(wineSupply) {
				winePrice = mimSupply / wineSupply;
			});
		});
		
		// Get the price of XGRAPE
		await grape.methods.balanceOf(GRAPE_XGRAPE_LP).call({from: account}).then(async(grapeSupply) => {
			await xgrape.methods.balanceOf(GRAPE_XGRAPE_LP).call({from: account}).then(async(xgrapeSupply) => {
				xgrapePrice = (xgrapeSupply / grapeSupply) * grapePrice;
			});
		});
		
		// Get the price of a WINE-MIM-LP
		await wine_mim_lp.methods.totalSupply().call({from: account}).then(async(totalSupply) => {
			await mim.methods.balanceOf(WINE_MIM_LP).call({from: account}).then(async(mimLPbal) => {
				wine_mim_lp_value = ((mimLPbal / totalSupply)*2);
			});
		});
		
		// Get the price of a GRAPE-XGRAPE-LP
		await grape_xgrape_lp.methods.totalSupply().call({from: account}).then(async(totalSupply) => {
			await grape.methods.balanceOf(GRAPE_XGRAPE_LP).call({from: account}).then(async(grapeLPbal) => {
				grape_xgrape_lp_value = ((grapeLPbal / totalSupply)*2) * grapePrice;
			});
		});
	}
	
	if(!usingWeb3) {
		
		await callRPC(account, MIM_TOKEN, "balanceOf(address)", [ VINT_LP ]).then(async(mimSupply) => {
			await callRPC(account, VINT_TOKEN, "balanceOf(address)", [ VINT_LP ]).then(async(vintSupply) => {
				// Calculate the price of the VINTAGE
				vintPrice = (mimSupply/vintSupply);
			});
		});

		await callRPC(account, MIM_TOKEN, "balanceOf(address)", [ GRAPE_LP ]).then(async(mimSupply2) => {
			await callRPC(account, GRAPE_TOKEN, "balanceOf(address)", [ GRAPE_LP ]).then(function(grapeSupply) {
				grapePrice = (mimSupply2/grapeSupply);
			});
		});
		
		await callRPC(account, MIM_TOKEN, 'balanceOf(address)', [ WINE_MIM_LP ]).then(async(mimLPbal) => {
			await callRPC(account, WINE_TOKEN, 'balanceOf(address)', [ WINE_MIM_LP ]).then(async(wineLPbal) => {
				winePrice = mimLPbal / wineLPbal;
			});
		});
		
		// Get the price of XGRAPE
		await callRPC(account, GRAPE_TOKEN, "balanceOf(address)", [ GRAPE_XGRAPE_LP ]).then(async(grapeSupply) => {
			await callRPC(account, XGRAPE_TOKEN, "balanceOf(address)", [ GRAPE_XGRAPE_LP ]).then(async(xgrapeSupply) => {
				xgrapePrice = (xgrapeSupply / grapeSupply) * grapePrice;
			});
		});
		
		await callRPC(account, WINE_MIM_LP, "totalSupply()", [ ]).then(async(totalSupply) => {
			await callRPC(account, MIM_TOKEN, "balanceOf(address)", [ WINE_MIM_LP ]).then(function(mimLPbal) {
				wine_mim_lp_value = ((mimLPbal / totalSupply)*2);				
			});
		});
		
		// Get the price of a GRAPE-XGRAPE-LP
		await callRPC(account, GRAPE_XGRAPE_LP, "totalSupply()", [ ]).then(async(totalSupply) => {
			await callRPC(account, GRAPE_TOKEN, "balanceOf(address)", [ GRAPE_XGRAPE_LP ]).then(async(grapeLPbal) => {
				grape_xgrape_lp_value = ((grapeLPbal / totalSupply)*2) * grapePrice;
			});
		});
	}
}

/*
	Updates the dataset used for the winery panel and update the ui
*/
const updateWinery = async(account) => {
	if(usingWeb3) {
		await winery.methods.getFatigueAccrued(account).call({from: account}).then(async(fatigue) => {
			// Convert to percentage
			fatigueAccrued = fatigue/1e14;

			// Get the date and time, in locale time. that fatigue will reach 30%, and 100%
			await winery.methods.getTimeUntilFatigued(account).call( {from: account}).then(function(result) {
				dt50 = new Date(0);
				dt100 = new Date(0);
				dt50.setUTCSeconds((Date.now()/1000) + ((result - (Date.now()/1000)) * (0.5-fatigueAccrued)));
				dt100.setUTCSeconds(result);
			});

			// Get current and max VPM
			await winery.methods.getTotalPPM(account).call({from: account}).then(async(totalPPM) => { // totalPPM is our MAX VPM
				resetCost = totalPPM * RESET_MULTI;
				await winery.methods.getMasterVintnerNumber(account).call({from: account}).then(async(masterNum) => { // Number of staked masters
					masterCount = masterNum;
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
									vpm = dynamicPPM/1e18;
									maxVPM = totalPPM * (BASE_VPM * (modifier/100));
								});
							});
						});
					});
				});
			});
		});

		// Get the number of normal vintners
		await winery.methods.numberOfStaked(account, 0).call({from: account}).then(function(result) {
			normalCount = result;
		});

		// Get the number of tools
		await winery.methods.ownedUpgradeStakesBalance(account).call({from: account}).then(function(result) {
			toolCount  = result;
		});

		// Get the amount of VINTAGE accrued in the reward contract
		await winery.methods.getVintageWineAccrued(account).call({from: account}).then(async(claimable) => {
			vintEarned = (claimable / 1e18);
			// Get the maximum storage and show how much is used
			await wineprog.methods.getVintageWineStorage(account).call( {from: account} ).then(function(result) {
				storage = window.web3.utils.toBN(result) / 1e18;
				storageDt = new Date();
				storageDt.setSeconds(storageDt.getSeconds() + ((storage-vintEarned)/vpm*60));
			});

			ratio = (vintPrice / grapePrice) * 100;

			// Calculate tool costs
			mag = (10*grapePrice) + (900*vintPrice);
			shears = (20*grapePrice) + (1800*vintPrice);
			hydro = (40*grapePrice) + (4200*vintPrice);
		});
	}
	
	if(!usingWeb3) {
		await callRPC(account, WINEMAKER_REWARDS, "getFatigueAccrued(address)", [ account ]).then(async(fatigue) => {
			fatigueAccrued = fatigue/1e14;
			await callRPC(account, WINEMAKER_REWARDS, "getTimeUntilFatigued(address)", [ account ]).then(function(result) {
				dt50 = new Date(0);
				dt100 = new Date(0);

				dt50.setUTCSeconds((Date.now()/1000) + ((result - (Date.now()/1000)) * (0.5-fatigueAccrued)));
				dt100.setUTCSeconds(result);
			});

			await callRPC(account, WINEMAKER_REWARDS, "getTotalPPM(address)", [ account ]).then(async(totalPPM) => {
				resetCost = totalPPM * RESET_MULTI;
				await callRPC(account, WINEMAKER_REWARDS, "getMasterVintnerNumber(address)", [ account ]).then(async(masterNumber) => {
					await callRPC(account, WINEMAKER_PROGRESSION, "getMasterVintnerSkillModifier(address,uint256)", [ account, masterNumber ]).then(async(modifier) => {
						masterCount = window.web3.utils.hexToNumber(masterNumber);
						await callRPC(account, WINEMAKER_REWARDS, "startTimeStamp(address)", [ account ]).then(async(startTime) => {
							await callRPC(account, WINEMAKER_REWARDS, "fatiguePerMinute(address)", [ account ]).then(async(fatiguePM) => {
								await callRPC(account, WINEMAKER_REWARDS, "vintageWineAccruedCalculation(uint256,uint256,uint256,uint256,uint256,uint256,uint256)", [ 0, 60, totalPPM, modifier, fatigue, fatiguePM, YIELD_PPS ]).then(function(dynamicPPM) {
									vpm = dynamicPPM/1e18;
									maxVPM = totalPPM * (BASE_VPM * (modifier/100));
								});
							});
						});
					});
				});
			});
		});

		await callRPC(account, WINEMAKER_REWARDS, "numberOfStaked(address,uint256)", [ account, 0 ]).then(function(result) {
			normalCount = window.web3.utils.hexToNumber(result);
		});

		await callRPC(account, WINEMAKER_REWARDS, "ownedUpgradeStakesBalance(address)", [ account, 0 ]).then(function(result) {
			toolCount = window.web3.utils.hexToNumber(result);
		});

		await callRPC(account, WINEMAKER_REWARDS, "getVintageWineAccrued(address)", [ account ]).then(async(claimable) => {
			vintEarned = (claimable / 1e18);
			await callRPC(account, WINEMAKER_PROGRESSION, "getVintageWineStorage(address)", [ account ]).then(function(result) {
				storage = window.web3.utils.toBN(result) / 1e18;
				storageDt = new Date();
				storageDt.setSeconds(storageDt.getSeconds() + ((storage-vintEarned)/vpm*60));						
			});
			
			ratio = (vintPrice / grapePrice) * 100;
			 mag = (10*grapePrice) + (900*vintPrice);
			shears = (20*grapePrice) + (1800*vintPrice);
			hydro = (40*grapePrice) + (4200*vintPrice);
		});
	}
	
	// Update winery UI elements
	$("#fatigue").html((fatigueAccrued*100).toFixed(3) + "%");
	$("#fatiguedate50").html(dt50.toLocaleDateString() + ", " + dt50.toLocaleTimeString());
	$("#fatiguedate100").html(dt100.toLocaleDateString() + ", " + dt100.toLocaleTimeString());
	$("#resetCost").html(resetCost.toFixed(2) + " GRAPE<br>" + ((parseInt(normalCount) + parseInt(masterCount) + parseInt(toolCount)) * 15) + ".00 VINTAGE");
	$("#wm-masters").html(masterCount + " vintners");
	$("#vpm").html(vpm.toFixed(2) + "/" + maxVPM.toFixed(2));
	$("#wm-normals").html(normalCount + " vintners");
	$("#wm-tools").html(toolCount + " tools");
	$("#vintage").html(vintEarned.toFixed(2) + " $VINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (vintEarned * vintPrice).toFixed(2) + " USD</div>");
	$("#storage").html(vintEarned.toFixed(0) + "/" + storage.toFixed(0));
	$("#wm-storagefull").html(storageDt.toLocaleDateString() + " " + storageDt.toLocaleTimeString());
	$("#vintageprice").html("$" + (vintPrice).toFixed(4) + " USD (" + ((vintPrice / grapePrice)*100).toFixed(2) + "%)");
	$("#grapeprice").html("$" + grapePrice.toFixed(4) + " USD");
	let fiftyGrape = 50 * grapePrice;
	$("#grapetovint").html((fiftyGrape/vintPrice).toFixed(2) + " $VINTAGE");
	$("#magazine").html("$" + mag.toFixed(2) + " USD");// + " ($" + (fiftyGrape - mag).toFixed(2) + ")");
	$("#shears").html("$" + shears.toFixed(2) + " USD");// + " ($" + (fiftyGrape*3 - shears).toFixed(2) + ")<br>");
	$("#hydro").html("$" + hydro.toFixed(2) + " USD");// + " ($" + (fiftyGrape*5 - hydro).toFixed(2) + ")");
}

var svintRatio = 1;
var vintBalance = 0, svintBalance = 0, svintPoolBalance = 0;
var pendingWine = 0, pendingSvint;
var cellarDt;

/*
	Update the dataset used for the cellar panel and update the ui
*/
const updateCellar = async(account) => {
	if(usingWeb3) {
		// Get the ratio of svint to vint in the cellar
		await svint.methods.totalSupply().call({from: account}).then(async(svintSupply) => {
			svint.methods.vintageWineBalance().call({from: account}).then(function(vintageInCellar) {
				svintRatio = window.web3.utils.toBN(vintageInCellar) / window.web3.utils.toBN(svintSupply);
			});
		});

		// Get the vintage balance
		await vint.methods.balanceOf(account).call({from: account}).then(function(balance) {
			vintBalance = balance/1e18;
		});
		
		// Get the svintage balance
		await svint.methods.balanceOf(account).call({from: account}).then(function(balance) {
			svintBalance = balance/1e18;
		});
		
		// Get the svintage in the vinyard
		await vineyard.methods.userInfo(7,account).call({from: account}).then(function(userInfo) {
			svintPoolBalance = (window.web3.utils.toBN(userInfo['amount'])/1e18);
		});
		
		// Get the pending wine rewards from the pool
		await vineyard.methods.pendingShare(7,account).call({from: account}).then(function(balance) {
			pendingWine = balance/1e18;						
		});
		
		// Get the pending svintage to be unlocked
		await svint.methods.unlockAmounts(account).call({from: account}).then(function(balance) {
			pendingSvint = balance/1e18;
		});
		
		// Get the timestamp for when the svintage will be unlocked and claimable
		await svint.methods.unlockTimestamps(account).call({from: account}).then(function(timestamp) {
			cellarDt = new Date(0);		
			cellarDt.setUTCSeconds(timestamp);
			
			// Grey out the button if the timestamp hasn't been reached yet
			// I have not been able to get this to work...if you can see why, please tell me on this discord @crypto_neo
			//let now = Date.now()/1000;
			/*if(timestamp < now) {
				$("#cel-claimpending").css("backgroundColor", "#777777");
				$("#cel-claimpending").css("color", "#BABABA");
			} else {
				$("#cel-claimpending").css("backgroundColor", "");
				$("#cel-claimpending").css("color", "");
			}*/
		});
	}

	if(!usingWeb3) {
		await callRPC(account, SVINT_TOKEN, "totalSupply()", []).then(async(svintSupply) => {
			await callRPC(account, SVINT_TOKEN, "vintageWineBalance()", { }).then(function(vintageInCellar) {
				svintRatio = window.web3.utils.toBN(vintageInCellar) / window.web3.utils.toBN(svintSupply);				
			});
		});

		// Wallet VINTAGE balance
		await callRPC(account, VINT_TOKEN, "balanceOf(address)", [ account ]).then(function(balance) {
			vintBalance = balance/1e18;			
		});

		// Wallet sVINTAGE balance
		await callRPC(account, SVINT_TOKEN, "balanceOf(address)", [ account ]).then(function(balance) {
			svintBalance = balance/1e18;
		});

		// Vinyard sVINTAGE balance
		await callRPC(account, VINEYARD, "userInfo(uint256,address)", [ 7, account ]).then(function(userInfo) {
			svintPoolBalance = window.web3.utils.toBN(userInfo.substring(2,66))/1e18;			
		});

		await callRPC(account, VINEYARD, "pendingShare(uint256,address)", ['7', account]).then(function(balance) {
			pendingWine = balance/1e18;			
		});

		await callRPC(account, SVINT_TOKEN, "unlockAmounts(address)", [ account ]).then(function(balance) {
			pendingSvint = balance/1e18;
		});
		
		await callRPC(account, SVINT_TOKEN, "unlockTimestamps(address)", [ account ]).then(function(timestamp) {
			cellarDt = new Date(0);			
			cellarDt.setUTCSeconds(timestamp);
			
			//let now = Date.now() / 1000;
			/*if(timestamp < now) {
				$("#cel-claimpending").css("backgroundColor", "#777777");
				$("#cel-claimpending").css("color", "#BABABA")
			} else {
				$("#cel-claimpending").css("backgroundColor", "");
				$("#cel-claimpending").css("color", "")
			}*/
		});
		
	}
	
	$("#cellarratio").html(svintRatio.toFixed(2) + "x");
	$("#vintinwallet").html(vintBalance.toFixed(2) + " $VINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (vintBalance * vintPrice).toFixed(2) + " USD</div>");		
	$("#svintinwallet").html(svintBalance.toFixed(2) + " $sVINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (svintBalance * svintRatio * vintPrice).toFixed(2) + " USD</div>");
	$("#svintinvinyard").html(svintPoolBalance.toFixed(2) + " $sVINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (svintPoolBalance * svintRatio * vintPrice).toFixed(2) + " USD</div>");
	$("#pendingwine").html(pendingWine.toFixed(2) + " $WINE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (pendingWine * winePrice).toFixed(2) + " USD</div>");
	$("#cel-pendingamounts").html(pendingSvint.toFixed(2) + " $VINTAGE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (pendingSvint * vintPrice).toFixed(2) + " USD</div>");
	$("#cel-pendingtimestamps").html(cellarDt.toLocaleDateString() + ", " + cellarDt.toLocaleTimeString());
}

var wine_mim_lp_value = 0;
var roiRisk = 0, roiProgress = 0, roiShares = 0;
var trueAPR = 1.25, visibleAPR = 1.25;
var trackedTokenBalance = 0, totalTokenBalance;
var depositedBalance = 0, compoundedBalance = 0;
var pendingPressWine = 0;
var dailyPressWine = 0;

/*
	Update the dataset used for the winepress panel and update the ui
*/
const updateWinepress = async(account) => {
	if(usingWeb3) {
		// Start update winepress ui
		
		// Get the tracked balance, compounded balance, and assassination risk
		await winepress.methods.calculateTrackedProfit(account).call({from: account}).then(async(currentProfit) => {
			await winepress.methods.userInfo(account).call({from: account}).then(async(userInfo) => {
				// These calculations are from the smart contract
				let balance = window.web3.utils.toBN(userInfo['balance']);
				let claimPerSecond = window.web3.utils.toBN(userInfo['claimPerSecond']);				
				let totalShareBalance = window.web3.utils.toBN(userInfo['totalShareBalance']);
				
				roiShares = balance;
				totalTokenBalance = window.web3.utils.toBN(userInfo['totalTokenBalance']);
				trackedTokenBalance = window.web3.utils.toBN(userInfo['trackedTokenBalance']);
				compoundedBalance = trackedTokenBalance - totalTokenBalance;

				// Calculate assassination risk, literally same code from contract :)
				let profitRatio = (currentProfit * 10e18) / trackedTokenBalance;
				let expectedProfit = (trackedTokenBalance * 3.5);
				let profitDifference = expectedProfit - currentProfit;
				roiRisk = ((1.0 - (Math.abs(profitDifference) / expectedProfit)) * 100).toFixed(2);
				
				await winepress.methods.calculatePrice().call({from: account}).then(function(lpts) {
					lpToShare = lpts / 1e18;
					trueAPR = (((claimPerSecond * lpToShare) * 86400) / totalTokenBalance) * 100;
					visibleAPR = (((claimPerSecond * lpToShare) * 86400) / trackedTokenBalance) * 100;

				});
				await winepress.methods.pendingShares(account).call({from: account}).then(async(pendingShares) => {
					roiProgress = (1-((balance-pendingShares)/totalShareBalance))*100;
				});
			});
		});

		// Get the pending rewards
		await winepress.methods.pendingRewards(account).call({from: account}).then(function(pendingRewards) {
			pendingPressWine = (window.web3.utils.toBN(pendingRewards)/1e18);
		});

		// Get the rewards per day
		await winepress.methods.rewardsPerDay(account).call({from: account}).then(function(dailyRewards) {
			dailyPressWine = window.web3.utils.toBN(dailyRewards)/1e18;
		});
	}
	
	if(!usingWeb3) {		
		await callRPC(account, WINEPRESS, "calculateTrackedProfit(address)", [ account ]).then(async(currentProfit) => {
			await callRPC(account, WINEPRESS, "userInfo(address)", [ account ]).then(async(userInfo) => {
				let balance = window.web3.utils.toBN(userInfo.substring(2, 66));
				let claimPerSecond = window.web3.utils.toBN(userInfo.substring(386, 450));
				let totalShareBalance = window.web3.utils.toBN(userInfo.substring(194, 194+64));								
				
				roiShares = balance;
				totalTokenBalance = window.web3.utils.toBN(userInfo.substring(130, 130+64));
				trackedTokenBalance = window.web3.utils.toBN(userInfo.substring(258, 258+64));
				compoundedBalance = trackedTokenBalance - totalTokenBalance;				

				let profitRatio = (currentProfit * 10e18) / trackedTokenBalance;
				let expectedProfit = (trackedTokenBalance * (3.5 * 10e18)) / 10e18;
				let profitDifference = expectedProfit - currentProfit;
				
				roiRisk = ((1.0 - (Math.abs(profitDifference) / expectedProfit)) * 100).toFixed(2);				
				await callRPC(account, WINEPRESS, "calculatePrice()", [ ]).then(function(lpts) {
					lpToShare = lpts / 1e18;
					trueAPR = (((claimPerSecond * lpToShare) * 86400) / totalTokenBalance) * 100;
					visibleAPR = (((claimPerSecond * lpToShare) * 86400) / trackedTokenBalance) * 100;					
				});

				await callRPC(account, WINEPRESS, "pendingShares(address)", [ account]).then(async(pendingShares) => {
					roiProgress = (1-((balance-pendingShares)/totalShareBalance))*100;
				});
			});
		});
				
		await callRPC(account, WINEPRESS, "pendingRewards(address)", [ account ]).then(function(pendingRewards) {
			pendingPressWine =  pendingBalance = (window.web3.utils.toBN(pendingRewards)/1e18);			
		});

		await callRPC(account, WINEPRESS, "rewardsPerDay(address)", [ account ]).then(function(dailyRewards) {
			dailyPressWine = window.web3.utils.toBN(dailyRewards)/1e18;			
		});
	}
	
	$("#wp-lpvalue").html("$" + wine_mim_lp_value.toFixed(2) + " USD");
	$("#wp-visibleaprroi").html(visibleAPR.toFixed(2) + "% / " + (visibleAPR*72).toFixed(2) + "%");
	$("#wp-trueaprroi").html(trueAPR.toFixed(2) + "% / " + (trueAPR*72).toFixed(2) + "%");
	let trackedVal = ((trackedTokenBalance/1e18)*wine_mim_lp_value);
	let totalVal = ((totalTokenBalance/1e18)*wine_mim_lp_value)
	let compVal = ((compoundedBalance/1e18)*wine_mim_lp_value)
	$("#wp-trackedBalance").html((trackedTokenBalance/1e18).toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + (trackedVal/2).toFixed(2) + " MIM/" + (trackedVal/2/winePrice).toFixed(2) + " WINE</div>");
	$("#wp-depositedBalance").html((totalTokenBalance / 1e18).toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + (totalVal/2).toFixed(2) + " MIM/" + (totalVal/2/winePrice).toFixed(2) + " WINE</div>");
	$("#wp-compoundedBalance").html((compoundedBalance / 1e18).toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + (compVal/2).toFixed(2) + " MIM/" + (compVal/2/winePrice).toFixed(2) + " WINE</div>");
	$("#wp-assassinationrisk").html(roiRisk + "% / 100%");
	if(roiRisk <= 90) {
		$("#wp-assassinationrisk").css({"color": "#00FF00"});
	} else if(roiRisk < 100) {
		$("#wp-assassinationrisk").css({"color": "#FFBA00"});
	} else {
		$("#wp-assassinationrisk").css({"color": "#FF0000"});
	}	
	let claimableVal = ((lpToShare * (roiShares/1e18)) * wine_mim_lp_value)
	$("#wp-roishares").html( (roiShares/1e18).toFixed(2) + " Shares<br><div class='usd-display'>&nbsp;&nbsp;~" + (lpToShare * (roiShares/1e18)).toFixed(2) + " WINE-MIM-LP<br>~$" + (claimableVal/2).toFixed(2) + " MIM/" + (claimableVal/2/winePrice).toFixed(2) + " WINE</div>");
	$("#wp-roiprogress").html( roiProgress.toFixed(2) + "% / 100%");
	pendingVal = (pendingPressWine * wine_mim_lp_value);
	dailyVal = (dailyPressWine * wine_mim_lp_value);
	$("#wp-pendingRewards").html(pendingPressWine.toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + (pendingVal/2).toFixed(2) + " MIM/" + (pendingVal/2/winePrice).toFixed(2) + " WINE</div>");
	$("#wp-dailyRewards").html(dailyPressWine.toFixed(2) + " WINE-MIM-LP<br><div class='usd-display'>&nbsp;&nbsp;~$" + (dailyVal/2).toFixed(2) + " MIM/" + (dailyVal/2/winePrice).toFixed(2) + " WINE</div>");
}

var xgrapePrice = 0;
var grape_xgrape_lp_value = 0;
/*
	Update the dataset used for the sodapress panel and update the ui
*/
const updateSodapress = async(account) => {
	if(usingWeb3) {
		// Start update sodapress ui
		
		// Get the tracked balance, compounded balance, and assassination risk
		await sodapress.methods.calculateTrackedProfit(account).call({from: account}).then(async(currentProfit) => {
			await sodapress.methods.userInfo(account).call({from: account}).then(async(userInfo) => {
				// These calculations are from the smart contract
				let balance = window.web3.utils.toBN(userInfo['balance']);
				let claimPerSecond = window.web3.utils.toBN(userInfo['claimPerSecond']);				
				let totalShareBalance = window.web3.utils.toBN(userInfo['totalShareBalance']);
				
				roiShares = balance;
				totalTokenBalance = window.web3.utils.toBN(userInfo['totalTokenBalance']);
				trackedTokenBalance = window.web3.utils.toBN(userInfo['trackedTokenBalance']);
				compoundedBalance = trackedTokenBalance - totalTokenBalance;

				// Calculate assassination risk, literally same code from contract :)
				let profitRatio = (currentProfit * 10e18) / trackedTokenBalance;
				let expectedProfit = (trackedTokenBalance * 3.5);
				let profitDifference = expectedProfit - currentProfit;
				roiRisk = ((1.0 - (Math.abs(profitDifference) / expectedProfit)) * 100).toFixed(2);
				
				await sodapress.methods.calculatePrice().call({from: account}).then(function(lpts) {
					lpToShare = lpts / 1e18;
					trueAPR = (((claimPerSecond * lpToShare) * 86400) / totalTokenBalance) * 100;
					visibleAPR = (((claimPerSecond * lpToShare) * 86400) / trackedTokenBalance) * 100;

				});
				await sodapress.methods.pendingShares(account).call({from: account}).then(async(pendingShares) => {
					roiProgress = (1-((balance-pendingShares)/totalShareBalance))*100;
				});
			});
		});

		// Get the pending rewards
		await sodapress.methods.pendingRewards(account).call({from: account}).then(function(pendingRewards) {
			pendingPressWine = (window.web3.utils.toBN(pendingRewards)/1e18);
		});

		// Get the rewards per day
		await sodapress.methods.rewardsPerDay(account).call({from: account}).then(function(dailyRewards) {
			dailyPressWine = window.web3.utils.toBN(dailyRewards)/1e18;
		});
	}
	
	if(!usingWeb3) {		
		await callRPC(account, SODAPRESS, "calculateTrackedProfit(address)", [ account ]).then(async(currentProfit) => {
			await callRPC(account, SODAPRESS, "userInfo(address)", [ account ]).then(async(userInfo) => {
				let balance = window.web3.utils.toBN(userInfo.substring(2, 66));
				let claimPerSecond = window.web3.utils.toBN(userInfo.substring(386, 450));
				let totalShareBalance = window.web3.utils.toBN(userInfo.substring(194, 194+64));								
				
				roiShares = balance;
				totalTokenBalance = window.web3.utils.toBN(userInfo.substring(130, 130+64));
				trackedTokenBalance = window.web3.utils.toBN(userInfo.substring(258, 258+64));
				compoundedBalance = trackedTokenBalance - totalTokenBalance;				

				let profitRatio = (currentProfit * 10e18) / trackedTokenBalance;
				let expectedProfit = (trackedTokenBalance * (3.5 * 10e18)) / 10e18;
				let profitDifference = expectedProfit - currentProfit;
				
				roiRisk = ((1.0 - (Math.abs(profitDifference) / expectedProfit)) * 100).toFixed(2);				
				await callRPC(account, SODAPRESS, "calculatePrice()", [ ]).then(function(lpts) {
					lpToShare = lpts / 1e18;
					trueAPR = (((claimPerSecond * lpToShare) * 86400) / totalTokenBalance) * 100;
					visibleAPR = (((claimPerSecond * lpToShare) * 86400) / trackedTokenBalance) * 100;					
				});

				await callRPC(account, SODAPRESS, "pendingShares(address)", [ account]).then(async(pendingShares) => {
					roiProgress = (1-((balance-pendingShares)/totalShareBalance))*100;
				});
			});
		});
				
		await callRPC(account, SODAPRESS, "pendingRewards(address)", [ account ]).then(function(pendingRewards) {
			pendingPressWine =  pendingBalance = (window.web3.utils.toBN(pendingRewards)/1e18);			
		});

		await callRPC(account, SODAPRESS, "rewardsPerDay(address)", [ account ]).then(function(dailyRewards) {
			dailyPressWine = window.web3.utils.toBN(dailyRewards)/1e18;			
		});
	}
	
	$("#sp-lpvalue").html("$" + grape_xgrape_lp_value.toFixed(2) + " USD");
	$("#sp-visibleaprroi").html(visibleAPR.toFixed(2) + "% / " + (visibleAPR*90).toFixed(2) + "%");
	$("#sp-trueaprroi").html(trueAPR.toFixed(2) + "% / " + (trueAPR*90).toFixed(2) + "%");
	let trackedVal = ((trackedTokenBalance/1e18) * grape_xgrape_lp_value);
	let totalVal = ((totalTokenBalance/1e18) * grape_xgrape_lp_value);
	let compVal = ((compoundedBalance/1e18) * grape_xgrape_lp_value);
	$("#sp-trackedBalance").html((trackedTokenBalance/1e18).toFixed(2) + " GRAPE-XGRAPE-LP<br><div class='usd-display'>&nbsp;&nbsp;~" + (trackedVal/2).toFixed(2) + " XGRAPE/" + (trackedVal/2/grapePrice).toFixed(2) + " GRAPE</div>");
	$("#sp-depositedBalance").html((totalTokenBalance / 1e18).toFixed(2) + " GRAPE-XGRAPE-LP<br><div class='usd-display'>&nbsp;&nbsp;~" + (totalVal/2).toFixed(2) + " XGRAPE/" + (totalVal/2/grapePrice).toFixed(2) + " GRAPE</div>");
	$("#sp-compoundedBalance").html((compoundedBalance / 1e18).toFixed(2) + " GRAPE-XGRAPE-LP<br><div class='usd-display'>&nbsp;&nbsp;~" + (compVal/2).toFixed(2) + " XGRAPE/" + (compVal/2/grapePrice).toFixed(2) + " GRAPE</div>");
	$("#sp-assassinationrisk").html(roiRisk + "% / 100%");
	if(roiRisk <= 90) {
		$("#sp-assassinationrisk").css({"color": "#00FF00"});
	} else if(roiRisk < 100) {
		$("#sp-assassinationrisk").css({"color": "#FFBA00"});
	} else {
		$("#sp-assassinationrisk").css({"color": "#FF0000"});
	}	
	let claimableVal = ((lpToShare * (roiShares/1e18)) * grape_xgrape_lp_value)
	$("#sp-roishares").html( (roiShares/1e18).toFixed(2) + " Shares<br><div class='usd-display'>&nbsp;&nbsp;~" + (lpToShare * (roiShares/1e18)).toFixed(2) + " GRAPE-XGRAPE-LP<br>~" + (claimableVal/2).toFixed(2) + " XGRAPE/" + (claimableVal/2/grapePrice).toFixed(2) + " GRAPE</div>");
	$("#sp-roiprogress").html( roiProgress.toFixed(2) + "% / 100%");
	pendingVal = (pendingPressWine * xgrapePrice) * grape_xgrape_lp_value;
	dailyVal = (dailyPressWine * xgrapePrice) * grape_xgrape_lp_value;
	$("#sp-pendingRewards").html(pendingPressWine.toFixed(2) + " GRAPE-XGRAPE-LP<br><div class='usd-display'>&nbsp;&nbsp;~" + (pendingVal/2).toFixed(2) + " GRAPE/" + (pendingVal/2/grapePrice).toFixed(2) + " GRAPE</div>");
	$("#sp-dailyRewards").html(dailyPressWine.toFixed(2) + " GRAPE-XGRAPE-LP<br><div class='usd-display'>&nbsp;&nbsp;~" + (dailyVal/2).toFixed(2) + " GRAPE/" + (dailyVal/2/grapePrice).toFixed(2) + " GRAPE</div>");
}

class GrapeNodes {
	apr = 0;
	dripRate = 0;
	pending = 0;
	count = 0;
	compounds = 0;
	allocation = 0;
}

const updateNodes = async(account) => {
	let gns = new GrapeNodes();
	
	if(usingWeb3) {		
		await grape_nodes.methods.getDistributionRewards(account).call({from: account}).then(async(pending) => {
			gns.pending = pending;
		});
		
		await grape_nodes.methods.users(account).call({from: account}).then(async(userInfo) => {
			gns.count = userInfo['nodes'];
			gns.compounds = userInfo['compounds'];
			gns.allocation = userInfo['alloc_points']/1e18;
			await grape_nodes.methods.getDayDripEstimate(account).call({from: account}).then(async(dripEstimate) => {
					gns.dripRate = dripEstimate;
					gns.apr = (gns.dripRate / userInfo['total_deposits'])*100
					
					let dt = new Date();
					dripPerSec = gns.dripRate / 1e18 / 24 / 60 / 60;					
					grapeToCompound = 50 - (gns.pending/1e18);					
					secsToCompound = grapeToCompound / dripPerSec;					
					dt.setSeconds(dt.getSeconds() + secsToCompound);
					$("#node-grape-compounddate").html(dt.toLocaleDateString() + ", " + dt.toLocaleTimeString());
			});
		});		
		
		/*
		if($("#node-grape-autocompound")[0].checked === true) {
			if((gns.pending / 1e18) >= 50) {
				console.log("Autocompound triggered");
				await compoundGrapeNode();
			} else {
				console.log("Autocompound on standby...");
			}
		}
		*/
	}
	
	if(!usingWeb3) {
		await callRPC(account, GRAPE_NODES, "getDistributionRewards(address)", [ account ]).then(async(pending) => {
			gns.pending = pending;
		});
		
		await callRPC(account, GRAPE_NODES, "users(address)", [ account ]).then(async(userInfo) => {
			let total_deposits = window.web3.utils.toBN("0x"+userInfo.substring(2, 66));			
			gns.count = window.web3.utils.toBN("0x"+userInfo.substring(322, 386));
			gns.compounds = window.web3.utils.toBN("0x"+userInfo.substring(258, 322));
			gns.allocation = window.web3.utils.toBN("0x"+userInfo.substring(194, 258))/1e18;
			await callRPC(account, GRAPE_NODES, "getDayDripEstimate(address)", [ account ]).then(async(dripEstimate) => {			
					gns.dripRate = dripEstimate;
					gns.apr = (gns.dripRate / total_deposits)*100					
			});
		});
	}
	
	$("#node-grape-apr").html((gns.apr*365).toFixed(0) + "% | " + gns.apr.toFixed(2) + "%");	
	$("#node-grape-drip").html((gns.dripRate/1e18).toFixed(2) + " GRAPE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((gns.dripRate/1e18) * grapePrice).toFixed(2) + " USD</div>");
	$("#node-grape-pending").html((gns.pending/1e18).toFixed(2) + "/50 GRAPE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((gns.pending/1e18) * grapePrice).toFixed(2) + " USD</div>");
	$("#node-grape-nodecount").html(window.web3.utils.toNumber(gns.count) + " (" + (gns.count * 50) + " GRAPE)<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((gns.count * 50) * grapePrice).toFixed(2) + " USD</div>");
	$("#node-grape-compounds").html(window.web3.utils.toNumber(gns.compounds));
	$("#node-grape-allocation").html(gns.allocation.toFixed(2));
}

let winery = null;
let wineprog = null;
let winepress = null;
let vineyard = null;
let grape = null;
let vint = null;
let svint = null;
let mim = null;
let wine = null;
let wine_mim_lp = null;
let phc = null;
let grape_nodes = null;
let xgrape = null;
let sodapress = null;
let grape_xgrape_lp = null;

const getDataViaWeb3 = async (account) => {
	// Refresh the winery UI
	await updateGlobal(account);
	switch(selectedPanel) {
		case 0:
			await updateWinery(account);
			break;
		case 1:
			await updateCellar(account);
			break;
		case 2:
			await updateWinepress(account);
			break;
		case 3:
			await updateNodes(account);
		case 4:
			await updateSodapress(account);
		default:
			await updateWinery(account);
			break;
	}

// Start update PHC ui
	await phc.methods.vesting(account).call({from: account}).then(function(vesting) {
		let totalVested = (window.web3.utils.toBN(vesting['amount'])-window.web3.utils.toBN(vesting['claimed']))/1e18;
		let endEpoc = vesting['end'];
		let dt = new Date(0);
		dt.setUTCSeconds(endEpoc);
		$("#peg-fullyclaimablewhen").html(dt.toLocaleDateString() + ", " + dt.toLocaleTimeString());
		$("#peg-totalvested").html(totalVested.toFixed(2) + " WINE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (totalVested * winePrice).toFixed(2) + " USD</div>");
	});

	await phc.methods.claimableWine(account).call({from: account}).then(function(claimable) {
		let totalVested = window.web3.utils.toBN(claimable)/1e18;

		$("#peg-claimable").html(totalVested.toFixed(8) + " WINE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((claimable / 1e18) * winePrice).toFixed(4) + " USD</div>");
	});
// End update PHC ui
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
	await updateGlobal(account);
	switch(selectedPanel) {
		case 0:
			await updateWinery(account);
			break;
		case 1:
			await updateCellar(account);
			break;
		case 2:
			await updateWinepress(account);
			break;
		case 3:
			await updateNodes(account);
		case 4:
			await updateSodapress(account);
		default:
			await updateWinery(account);
			break;
	}

	// Start update PHC ui
	await callRPC(account, PEG_HEALTH_CAMPAIGN, "vesting(address)", [ account ]).then(function(vesting) {
		let totalVested = (window.web3.utils.toBN(vesting.substring(2,66))-window.web3.utils.toBN(vesting.substring(194,194+64)))/1e18;
		let endEpoc = window.web3.utils.hexToNumber("0x"+vesting.substring(130,130+64));
		let dt = new Date(0);
		dt.setUTCSeconds(endEpoc);
		$("#peg-fullyclaimablewhen").html(dt.toLocaleDateString() + ", " + dt.toLocaleTimeString());
		$("#peg-totalvested").html(totalVested.toFixed(2) + " WINE<br><div class='usd-display'>&nbsp;&nbsp;~$" + (totalVested * winePrice).toFixed(2) + " USD</div>");
	});

	await callRPC(account, PEG_HEALTH_CAMPAIGN, "claimableWine(address)", [ account ]).then(function(claimable) {
		let totalVested = window.web3.utils.toBN(claimable)/1e18;

		$("#peg-claimable").html(totalVested.toFixed(8) + " WINE<br><div class='usd-display'>&nbsp;&nbsp;~$" + ((claimable / 1e18) * winePrice).toFixed(4) + " USD</div>");
	});
// End update PHC ui
};

function secondsToString(_seconds) {
	let days = Math.floor(_seconds/86400);
	let hours = Math.floor((_seconds%86400)/3600);
	let minutes = Math.floor((_seconds%3600)/60);
	let seconds = Math.floor(_seconds%60);
	return days.toString().padStart(2, '0') + "d:" + hours.toString().padStart(2, '0') + "h:" + minutes.toString().padStart(2, '0') + "m:" + seconds.toString().padStart(2, '0') + "s";
}

var fcModdedFPM = 0;
var fcTotalPPM = 0;
var fcMasterSkillMod = 100;
function updateFatigueCalcSlider() {
	if(fcModdedFPM === 0 || fcTotalPPM === 0) {
		return;
	}

	// Get accrued fatigue and calculate the current fatigue level and max VPM
	MAX_FATIGUE = 100000000000000;
	accruedFatigue = ($("#slider").val()/100)*MAX_FATIGUE;
	fatigueLevel = (accruedFatigue/MAX_FATIGUE); // percent
	maxVpm = (fcTotalPPM * BASE_VPM) * (fcMasterSkillMod/100);

	// Get the seconds to the selected fatigue and the remainingDelta
	// seconds until 100% fatigue
	let zero = new Date(0);
	accruedFatigueSeconds = accruedFatigue / fcModdedFPM * 60;
	remainingFatigueSeconds = (MAX_FATIGUE-accruedFatigue) / fcModdedFPM * 60;
	let accruedDelta = (new Date(accruedFatigueSeconds*1000) - zero) / 1000;
	let remainingDelta = (new Date(remainingFatigueSeconds*1000) - zero) / 1000;

	// Integrate earnings
	earnedVintage = 0;
	pendingVintage = 0;
	let i = 0;
	while(i < MAX_FATIGUE) {
		let cf = 1-(i/MAX_FATIGUE);
		if(i < accruedFatigue) {
			earnedVintage += cf * maxVpm;
		} else {
			pendingVintage += cf * maxVpm;
		}
		i += fcModdedFPM;
	}
	totalToEarn = earnedVintage + pendingVintage;

	// Update fatigue calculator UI
	$("#fc-fatiguelevel").html("Selected Fatigue: " + $("#slider").val() + "%");
	$("#fc-timetofatigue").html("&Delta;T " + (fatigueLevel*100).toFixed(0) + "% - " + secondsToString(accruedDelta));
	$("#fc-timetofullfatigue").html("&Delta;T to 100% - " + secondsToString(remainingDelta));
	$("#fc-earned").html("Earned: " + earnedVintage.toFixed(0) + " VINTAGE ( " + (earnedVintage/totalToEarn*100).toFixed(2) + "% )");
	$("#fc-pending").html("Pending&nbsp;: " + pendingVintage.toFixed(0) + " VINTAGE ( " + (pendingVintage/totalToEarn*100).toFixed(2) + "% )");
};

function toggleFatigueCalculator() {
	// Pull contract variables
	if(usingWeb3) {
		// Contract objects
		let winery = new window.web3.eth.Contract(WINEMAKER_REWARDS_ABI, WINEMAKER_REWARDS);
		let wineprog = new window.web3.eth.Contract(WINEMAKER_PROGRESSION_ABI, WINEMAKER_PROGRESSION);
		// Initialize calculator via WEB3 interface
		window.web3.eth.getAccounts().then(async(accounts) => {
			let account = accounts[0]
			await winery.methods.getFatiguePerMinuteWithModifier(account).call({from: account}).then(async(fatiguePM) => {
				fcModdedFPM = window.web3.utils.toNumber(fatiguePM);
				await winery.methods.getTotalPPM(account).call({from: account}).then(async(totalPPM) => {
					fcTotalPPM = window.web3.utils.toNumber(totalPPM);
					await winery.methods.getMasterVintnerNumber(account).call({from: account}).then(async(masters) => {
						await wineprog.methods.getMasterVintnerSkillModifier(account, masters).call({from: account}).then(async(modifier) => {
							fcMasterSkillMod = window.web3.utils.toNumber(modifier);
							updateFatigueCalcSlider();
						});
					});
				});
			});
		});
	} else {
		// Initialize calculator via RPC calls
		let account = $("#addressEntry").val();
		callRPC(account, WINEMAKER_REWARDS, "getFatiguePerMinuteWithModifier(address)", [ account ]).then(async(fatiguePM) => {
			fcModdedFPM = window.web3.utils.toNumber(fatiguePM);
			await callRPC(account, WINEMAKER_REWARDS, "getTotalPPM(address)", [ account ]).then(async(totalPPM) => {
				fcTotalPPM = window.web3.utils.toNumber(totalPPM);
				await callRPC(account, WINEMAKER_REWARDS, "getMasterVintnerNumber(address)", [ account ]).then(async(masters) => {
					await callRPC(account, WINEMAKER_PROGRESSION, "getMasterVintnerSkillModifier(address,uint256)", [ account, masters ]).then(async(modifier) => {
						fcMasterSkillMod = window.web3.utils.toNumber(modifier);
						updateFatigueCalcSlider();
					});
				});
			});
		});
	}

	// Animate the ui
	if($("#fatigueCalculator").width() < 100) {
		$("#fatigueCalculator").animate({ width: 384, height: 194 });
		$("#fatigueHeader").animate({ marginLeft: '8px' });
	} else {
		$("#fatigueCalculator").animate({ width: 32, height: 32 });
		$("#fatigueHeader").animate({ marginLeft: '16px' });
	}
}

var refreshId = null;
var usingWeb3 = false;
var timer = 30;
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
		usingWeb3 = false;
		$("#address").html(account);
		getDataViaRpc(account);
		refreshId = setInterval(async() => {
			if(timer === 0) {
				timer = 30;
				getDataViaRpc(account);
			} else
				timer -= 1;
			$("#timer").html(timer);
		}, 1000);
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
			usingWeb3 = true;
			$("#address").html(accounts[0]);
			// Contract objects
			winery = new window.web3.eth.Contract(WINEMAKER_REWARDS_ABI, WINEMAKER_REWARDS);
			wineprog = new window.web3.eth.Contract(WINEMAKER_PROGRESSION_ABI, WINEMAKER_PROGRESSION);
			winepress = new window.web3.eth.Contract(WINEPRESS_ABI, WINEPRESS);
			vineyard = new window.web3.eth.Contract(VINEYARD_ABI, VINEYARD);
			grape = new window.web3.eth.Contract(GRAPE_TOKEN_ABI, GRAPE_TOKEN);
			vint = new window.web3.eth.Contract(VINT_TOKEN_ABI, VINT_TOKEN);
			svint = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);
			mim = new window.web3.eth.Contract(MIM_TOKEN_ABI, MIM_TOKEN);
			wine = new window.web3.eth.Contract(WINE_TOKEN_ABI, WINE_TOKEN);
			wine_mim_lp = new window.web3.eth.Contract(WINE_MIM_LP_ABI, WINE_MIM_LP);
			phc = new window.web3.eth.Contract(PEG_HEALTH_CAMPAIGN_ABI, PEG_HEALTH_CAMPAIGN);
			grape_nodes = new window.web3.eth.Contract(GRAPE_NODES_ABI, GRAPE_NODES);
			xgrape = new window.web3.eth.Contract(XGRAPE_TOKEN_ABI, XGRAPE_TOKEN);
			sodapress = new window.web3.eth.Contract(SODAPRESS_ABI, SODAPRESS);
			grape_xgrape_lp = new window.web3.eth.Contract(GRAPE_XGRAPE_LP_ABI, GRAPE_XGRAPE_LP);
			
			getDataViaWeb3(accounts[0]);
			refreshId = setInterval(async() => {
				if(timer === 0) {
					timer = 30;
					getDataViaWeb3(accounts[0]);
				} else
					timer -= 1;
				$("#timer").html(timer);
			}, 1000);
		});
	}
}

function triggerUpdate() {
	timer = 30;
	$("#timer").html(timer);
	if(usingWeb3) {
		window.web3.eth.getAccounts().then(function(accounts) {
			getDataViaWeb3(accounts[0]);
		});
	} else {
		let account = $("#addressEntry").val();
		if(account !== "" && window.web3.utils.isAddress(account)) {
			getDataViaRpc(account);
		}
	}
}

/*
	Reset fatigue using GRAPE
*/
const resetFatigue = async() => {	
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
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
						await grape.methods.approve(WINEMAKER_REWARDS, MAX_UINT256).send({from: account}).on("confirmation", function(confirms) {
							if(confirms === 5) {
								winery.methods.resetFatigue().send({from: account});
							}
						});
					} else {
						winery.methods.resetFatigue().send({from: account});
					}
				});
			});
		});
	});
}

/*
	 Claim vintage from the winemaker game
*/
const claimVintage = async() => {	
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		winery.methods.claimVintageWine().send({from: account});
	});
};

/*
	Deposits ALL of the VINTAGE available in your wallet into the cellar
*/
const depositVintage = async() => {
	let tokenA = new window.web3.eth.Contract(VINT_TOKEN_ABI, VINT_TOKEN);
	let tokenB = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		await tokenA.methods.balanceOf(account).call({from: account}).then(async(balance) => {
			if((balance / 1e18) > 0) {
				console.log("Depositing " + (balance / 1e18) + " Vintage");
				tokenB.methods.stake(balance).send({from: account});
			} else {
				console.error("[ERROR] Vintage balance must be greater than 0");
			}
		});
	});
};

const stakeSVintage = async() => {
	let token = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);	
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		await token.methods.allowance(account, VINEYARD).call({from: account}).then(async(allowance) => {
			console.log("Allowance: " + (allowance));
			await token.methods.balanceOf(account).call({from: account}).then(async(balance) => {
				if((balance / 1e18) > 0) {
					if(window.web3.utils.toBN(allowance).lt(window.web3.utils.toBN(MAX_UINT256))) {
						await token.methods.approve(VINEYARD, MAX_UINT256).send({from: account}).on("confirmation", function(confirms) {
							if(confirms === 5) {
								console.log("Staking " + (balance / 1e18) + " SVintage");
								vineyard.methods.deposit(7, balance).send({from: account});
							}
						});
					} else {
						console.log("Staking " + (balance / 1e18) + " SVintage");
						vineyard.methods.deposit(7, balance).send({from: account});
					}
				} else {
					console.error("[ERROR] SVintage balance must be greater than 0");
				}
			});
		});
	});
};

const unstakeSVintage = async() => {	
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		vineyard.methods.userInfo(7, account).call({from: account}).then(function(userInfo) {
			let balance = userInfo['amount'];
			console.log("Withdrawing " + (balance / 1e18) + " SVintage");
			vineyard.methods.withdraw(7, balance).send({from: account});
		});
	});
};

const withdrawVintage = async() => {
	let token = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		token.methods.balanceOf(account).call({from: account}).then(function(balance) {
			console.log("Preparing delayed unstake of " + (balance / 1e18) + " SVintage");
			token.methods.prepareDelayedUnstake(balance).send({from: account});
		});
	});
};

const claimVineyardRewards = async() => {	
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		vineyard.methods.withdraw(7,0).send({from: account});
	});
}

const claimPendingFromCellar = async() => {
	let token = new window.web3.eth.Contract(SVINT_TOKEN_ABI, SVINT_TOKEN);
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
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
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		winepress.methods.claim().send({from: account});
	});
};

/*
	Compound rewards from the winepress to stave off assassination
	Not taxed
*/
const compoundWinepress = async() => {	
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		winepress.methods.compound().send({from: account});
	});
};

/*
	Claims grape from grape nodes
*/
const claimGrapeNode = async() => {	
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		grape_nodes.methods.claim().send({from: account});
	});
}

/*
	Compounds grape into a new node
*/
const compoundGrapeNode = async() => {
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		grape.balanceOf(account).call({from: account}).then(async(balance) => {
			if(balance/1e18 >= 50) {
				grape_nodes.methods.compound().send({from: account});
			}
		});
	});
}

/*
	Claims rewards from the sodapress without compounding
	Subject to 5% tax, compounding is not taxed
*/
const claimSodapress = async() => {	
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		sodapress.methods.claim().send({from: account});
	});
};

/*
	Compound rewards from the sodapress to stave off assassination
	Not taxed
*/
const compoundSodapress = async() => {	
	window.web3.eth.getAccounts().then(async(accounts) => {
		let account = accounts[0];
		sodapress.methods.compound().send({from: account});
	});
};

/*
	Claims the rewards from the PEG campaign
*/
const claimPegCampaignRewards = async() => {
		console.log("[INFO] Performing Peg Health Campaign claim...");
		let phc = new window.web3.eth.Contract(PEG_HEALTH_CAMPAIGN_ABI, PEG_HEALTH_CAMPAIGN);
		window.web3.eth.getAccounts().then(async(accounts) => {
			let account = accounts[0];
			phc.methods.claimRewards().send({from: account});
		});
};

var selectedPanel = 0;
// TODO find a better fucking way to do this!
// Panel handlers
function showWineryPanel() {
	selectedPanel = 0;
	triggerUpdate();
	
	$("#CellarPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#CellarPanel").css('display', 'none') } );
	$("#PressPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PressPanel").css('display', 'none') } );
	$("#PegPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PegPanel").css('display', 'none') } );
	$("#NodePanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#NodePanel").css('display', 'none') } );
	$("#SodaPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#SodaPanel").css('display', 'none') } );
	
	$("#WineryPanel").css('display', 'block');
	$("#WineryPanel").animate({ opacity: 1, zindex: 1 });
}

function showCellarPanel() {
	selectedPanel = 1;
	triggerUpdate();
	
	$("#WineryPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#WineryPanel").css('display', 'none') } );
	$("#PressPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PressPanel").css('display', 'none') } );
	$("#PegPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PegPanel").css('display', 'none') } );
	$("#NodePanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#NodePanel").css('display', 'none') } );
	$("#SodaPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#SodaPanel").css('display', 'none') } );
	
	$("#CellarPanel").css('display', 'block');
	$("#CellarPanel").animate({ opacity: 1, zindex: 1 });
}

function showPressPanel() {
	selectedPanel = 2;
	triggerUpdate();
	
	$("#CellarPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#CellarPanel").css('display', 'none') } );
	$("#WineryPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#WineryPanel").css('display', 'none') } );
	$("#PegPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PegPanel").css('display', 'none') } );
	$("#NodePanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#NodePanel").css('display', 'none') } );
	$("#SodaPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#SodaPanel").css('display', 'none') } );
	
	$("#PressPanel").css('display', 'block');
	$("#PressPanel").animate({ opacity: 1, zindex: 1 });
}

function showNodePanel() {
	selectedPanel = 3;
	triggerUpdate();
	
	$("#CellarPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#CellarPanel").css('display', 'none') } );
	$("#WineryPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#WineryPanel").css('display', 'none') } );
	$("#PressPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PressPanel").css('display', 'none') } );
	$("#PegPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PegPanel").css('display', 'none') } );
	$("#SodaPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#SodaPanel").css('display', 'none') } );
	
	$("#NodePanel").css('display', 'block');
	$("#NodePanel").animate({ opacity: 1, zindex: 1 });
}

function showSodaPanel() {
	selectedPanel = 4;
	triggerUpdate();
	
	$("#CellarPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#CellarPanel").css('display', 'none') } );
	$("#WineryPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#WineryPanel").css('display', 'none') } );
	$("#PressPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PressPanel").css('display', 'none') } );
	$("#PegPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PegPanel").css('display', 'none') } );
	$("#NodePanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#NodePanel").css('display', 'none') } );
	
	$("#SodaPanel").css('display', 'block');
	$("#SodaPanel").animate({ opacity: 1, zindex: 1 });
}

function showPegPanel() {
	$("#CellarPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#CellarPanel").css('display', 'none') } );
	$("#WineryPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#WineryPanel").css('display', 'none') } );
	$("#PressPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#PressPanel").css('display', 'none') } );
	$("#NodePanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#NodePanel").css('display', 'none') } );
	$("#SodaPanel").animate({ opacity: 0, zindex: -1 }).after(function() { $("#SodaPanel").css('display', 'none') } );
	
	$("#PegPanel").css('display', 'block');
	$("#PegPanel").animate({ opacity: 1, zindex: 1 });
}


function hoverTip(id) {
	if($("#"+id).css("display") === "none") {
		$("#"+id).css({"display": "block", "z-index": 3});
	} else {
		$("#"+id).css({"display": "none", "z-index": -1});
	}									
}

web3Query();