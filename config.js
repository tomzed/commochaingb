
$(document).ready(function(){
    loadLogo(pgNm);
});



let config = {};

/******* Images *******/

// Variable Setup
config.logo = {};
config.logo.main = {};
config.logo.regulator = {};
config.logo.manufacturer = {};
config.logo.dealership = {};
config.logo.lease_company = {};
config.logo.leasee = {};
config.logo.scrap_merchant = {};

// Logo size
config.logo.width = '4em';
config.logo.height = '1.6em';

//Main Logo
config.logo.main.src = 'Icons/IBM_logo.svg';

// Regulator Logo
config.logo.regulator.src = 'Icons/Regulator/IBM_logo.svg';

// Manufacturer Logo
config.logo.manufacturer.src = 'Icons/Manufacturer/IBM_logo.svg';

// Dealership Logo
config.logo.dealership.src = 'Icons/Dealership/IBM_logo.svg';

// Lease Company Logo
config.logo.lease_company.src = 'Icons/Lease_Company/IBM_logo.svg';

// Leasee Logo
config.logo.leasee.src = 'Icons/Leasee/IBM_logo.svg';

// Scrap Merchant Logo
config.logo.scrap_merchant.src = 'Icons/Scrap_Merchant/IBM_logo.svg';

/******* Participants *******/
//This is where we define the details of the users for each company (name and password)

// Variable Setup
config.participants = {};
config.participants.users = {};
config.participants.users.regulators = [];
config.participants.users.manufacturers = [];
config.participants.users.dealerships = [];
config.participants.users.lease_companies = [];
config.participants.users.leasees = [];
config.participants.users.scrap_merchants = [];
config.participants.regulator = {};
config.participants.manufacturer = {};
config.participants.dealership = {};
config.participants.lease_company = {};
config.participants.leasee = {};
config.participants.scrap_merchant = {};

// Regulators
config.participants.users.regulators[0]= {};
config.participants.users.regulators[0].company = 'DVLA';
config.participants.users.regulators[0].type = 'Consortium'
config.participants.users.regulators[0].user = 'Gouvernance environnementale';

// Manufacturers
config.participants.users.manufacturers[0] = {};
config.participants.users.manufacturers[0].company = 'Alfa Romeo';
config.participants.users.manufacturers[0].type = 'Entreprise Extractrice';
config.participants.users.manufacturers[0].user = 'Kazatomprom';

config.participants.users.manufacturers[1] = {};
config.participants.users.manufacturers[1].company = 'Toyota';
config.participants.users.manufacturers[1].type = 'Entreprise Extractrice';
config.participants.users.manufacturers[1].user = 'Areva';

config.participants.users.manufacturers[2] = {};
config.participants.users.manufacturers[2].company = 'Jaguar Land Rover';
config.participants.users.manufacturers[2].type = 'Entreprise Extractrice';
config.participants.users.manufacturers[2].user = 'Taurus Minerals';

// Dealerships
config.participants.users.dealerships[0] = {};
config.participants.users.dealerships[0].company = 'Beechvale Group';
config.participants.users.dealerships[0].type = 'Entreprise Transformatrice';
config.participants.users.dealerships[0].user = 'Areva';

config.participants.users.dealerships[1] = {};
config.participants.users.dealerships[1].company = 'Milescape';
config.participants.users.dealerships[1].type = 'Entreprise Transformatrice';
config.participants.users.dealerships[1].user = 'Yellow Cake';

config.participants.users.dealerships[2] = {};
config.participants.users.dealerships[2].company = 'Viewers Alfa Romeo';
config.participants.users.dealerships[2].type = 'Entreprise Transformatrice';
config.participants.users.dealerships[2].user = 'Mine Uranium';

// Lease Companies
config.participants.users.lease_companies[0] = {};
config.participants.users.lease_companies[0].company = 'LeaseCan';
config.participants.users.lease_companies[0].type = 'Consommateur';
config.participants.users.lease_companies[0].user = 'Centrale Nucléaire France';

config.participants.users.lease_companies[1] = {};
config.participants.users.lease_companies[1].company = 'Every Car Leasing';
config.participants.users.lease_companies[1].type = 'Consommateur';
config.participants.users.lease_companies[1].user = 'Centrale Nucléaire Allemagne';

config.participants.users.lease_companies[2] = {};
config.participants.users.lease_companies[2].company = 'Regionwide Vehicle Contracts';
config.participants.users.lease_companies[2].type = 'Consommateur';
config.participants.users.lease_companies[2].user = 'Dassaut Armement';

// Leasees
config.participants.users.leasees[0] = {};
config.participants.users.leasees[0].company = 'Joe Payne';
config.participants.users.leasees[0].type = 'Transporteur';
config.participants.users.leasees[0].user = 'Joe';

config.participants.users.leasees[1] = {};
config.participants.users.leasees[1].company = 'Andrew Hurt';
config.participants.users.leasees[1].type = 'Transporteur';
config.participants.users.leasees[1].user = 'Andre';

config.participants.users.leasees[2] = {};
config.participants.users.leasees[2].company = 'Anthony O\'Dowd';
config.participants.users.leasees[2].type = 'Transporteur';
config.participants.users.leasees[2].user = 'Anthony';

// Scrap Merchants
config.participants.users.scrap_merchants[0] = {};
config.participants.users.scrap_merchants[0].company = 'Cray Bros (London) Ltd';
config.participants.users.scrap_merchants[0].type = 'Gestionnaire dechets';
config.participants.users.scrap_merchants[0].user = 'Stockage Beton-Ura';

config.participants.users.scrap_merchants[1] = {};
config.participants.users.scrap_merchants[1].company = 'Aston Scrap Centre';
config.participants.users.scrap_merchants[1].type = 'Gestionnaire dechets';
config.participants.users.scrap_merchants[1].user = 'Recyclage Uranium';

config.participants.users.scrap_merchants[2] = {};
config.participants.users.scrap_merchants[2].company = 'ScrapIt! UK';
config.participants.users.scrap_merchants[2].type = 'Gestionnaire dechet';
config.participants.users.scrap_merchants[2].user = 'Dechet Nucleaire';


/******* Used Particpants *******/
//This is where we select which participants will be used for the pages

// Regulator
config.participants.regulator = config.participants.users.regulators[0];

// Manufacturer
config.participants.manufacturer = config.participants.users.manufacturers[0];

// Dealership
config.participants.dealership = config.participants.users.dealerships[0];

// Lease Company
config.participants.lease_company = config.participants.users.lease_companies[0];

// Leasee
config.participants.leasee = config.participants.users.leasees[0];

// Scrap Merchant
config.participants.scrap_merchant = config.participants.users.scrap_merchants[0];

function loadLogo(pageType)
{
    $('#logo').attr('src', config.logo[pageType.toLowerCase()].src);
    $('#logo').css('width', config.logo.width);
    $('#logo').css('height', config.logo.height);
}

function loadParticipant(pageType)
{
    $('#username').html(config.participants[pageType].user);
     $('#typer').html(config.participants[pageType].typer);
    $('#company').html(config.participants[pageType].company);
}
