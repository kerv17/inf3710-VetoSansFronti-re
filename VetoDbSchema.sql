SET search_path = VetoDb;
DROP SCHEMA IF EXISTS  VetoDb CASCADE;
CREATE SCHEMA VetoDb;

CREATE TABLE IF NOT EXISTS VetoDB.Clinique(
	noClinique VARCHAR(10)  NOT NULL,
	nom VARCHAR(10) NOT NULL,
	rue  VARCHAR(15)  NOT NULL,
	ville VARCHAR(10)  NOT NULL,
	province VARCHAR(10)  NOT NULL,
	codePostal  VARCHAR(10)  NOT NULL,
	numTelephone  VARCHAR(15)  NOT NULL,
	numTelecopieur  VARCHAR(15)  NOT NULL,
	PRIMARY KEY (noClinique)
);

CREATE TABLE IF NOT EXISTS VetoDB.Traitement(
	noTraitement VARCHAR(10)  NOT NULL,
	description  VARCHAR(10)  NOT NULL,
	cout  Numeric(5,2)  NOT NULL,
	PRIMARY KEY (noTraitement)
);
CREATE DOMAIN VetoDB.SexType AS CHAR CHECK(VALUE IN('M','F'));

CREATE TABLE IF NOT EXISTS VetoDB.Employe(
	noEmploye  VARCHAR(10)  NOT NULL,
	noClinique VARCHAR(10)  NOT NULL,
	estGestionnaire BOOLEAN NOT NULL,
	nom  VARCHAR(10)  NOT NULL,
	prenom  VARCHAR(10)  NOT NULL,
	rue  VARCHAR(10)  NOT NULL,
	ville VARCHAR(15)  NOT NULL,
	province VARCHAR(10)  NOT NULL,
	codePostal  VARCHAR(10)  NOT NULL,
	numTelephone VARCHAR(15)  NOT NULL,
	dateNaissance Date not NULL,
	sexe SexType  not NULL,
	nas VARCHAR(10) UNIQUE  NOT NULL,
	salaire NUMERIC(9,2) DEFAULT 0,
	
	PRIMARY KEY (noEmploye),
	Foreign Key  (noClinique) REFERENCES Clinique(noClinique) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS VetoDB.Veterinaire(
	noEmploye VARCHAR(10)  NOT NULL,
	enService BOOLEAN DEFAULT FALSE,
	
	PRIMARY KEY (noEmploye),
	FOREIGN KEY (noEmploye) REFERENCES Employe(noEmploye)ON DELETE RESTRICT ON UPDATE CASCADE
	
);

CREATE TABLE IF NOT EXISTS VetoDB.proprietaireanimal(
	noProprietaire  VARCHAR(10)  NOT NULL,
	noClinique VARCHAR(10)  NOT NULL,
	nom  VARCHAR(10)  NOT NULL,
	prenom  VARCHAR(10)  NOT NULL,
	rue  VARCHAR(15)  NOT NULL,
	ville VARCHAR(15)  NOT NULL,
	province VARCHAR(10)  NOT NULL,
	codePostal  VARCHAR(10)  NOT NULL,
	numTelephone VARCHAR(20)  NOT NULL,
	
	
	
	
	PRIMARY KEY (noProprietaire,noClinique),
	Foreign Key  (noClinique) REFERENCES Clinique(noClinique) ON DELETE RESTRICT ON UPDATE CASCADE

);
CREATE DOMAIN VetoDB.etat AS VARCHAR(10) CHECK(VALUE IN('Mort','Vivant'));
CREATE TABLE IF NOT EXISTS VetoDB.Animal(
	noAnimal  VARCHAR(10)  NOT NULL,
	noClinique VARCHAR(10)  NOT NULL,
	noProprietaire  VARCHAR(10)  NOT NULL,
	nom  VARCHAR(10)  NOT NULL,
	type  VARCHAR(10)  NOT NULL,
	espece  VARCHAR(10)  NOT NULL,
	taille numeric(5,2)  NOT NULL,
	poids  numeric(5,2)  NOT NULL,
	description VARCHAR(20)  NOT NULL,
	dateNaissance DATE NOT NULL,
	dateInscription DATE NOT NULL,
	etatActuel etat NOT NULL,
	
	
	PRIMARY KEY (noAnimal,noClinique),
	FOREIGN KEY (noProprietaire,noClinique) REFERENCES proprietaireanimal(noProprietaire,noClinique) ON DELETE RESTRICT ON UPDATE CASCADE
	
);

CREATE TABLE IF NOT EXISTS VetoDB.examen(
	noExamen  VARCHAR(10)  NOT NULL,
	noAnimal  VARCHAR(10)  NOT NULL,
	noClinique VARCHAR(10)  NOT NULL,
	dateExamen Date NOT NULL,
	heureExamen Time NOT NULL,
	noVeterinaire  VARCHAR(10)  NOT NULL,
	description  VARCHAR(20)  NOT NULL,

	
	PRIMARY KEY (noExamen,noClinique),
	Foreign Key  (noAnimal,noClinique) REFERENCES Animal(noAnimal,noClinique) ON DELETE RESTRICT ON UPDATE CASCADE,
	Foreign Key  (noVeterinaire) REFERENCES Veterinaire(noEmploye) ON DELETE RESTRICT ON UPDATE CASCADE

);

CREATE TABLE IF NOT EXISTS VetoDB.Facture(
	noFacture  Serial NOT NULL ,
	noExamen  VARCHAR(10)  NOT NULL,
	noClinique VARCHAR(10) NOT NULL,
	moyenPaiement VARCHAR(10)  NOT NULL,
	date DATE NOT NULL,
	coutTotal NUMERIC(7,2) NOT NULL,
	estPaye BOOLEAN DEFAULT false,
	

	
	PRIMARY KEY (noFacture),
	Foreign Key  (noExamen,noClinique) REFERENCES Examen(noExamen,noClinique) ON DELETE RESTRICT ON UPDATE CASCADE
	

);

CREATE TABLE IF NOT EXISTS VetoDB.TraitementEffectue(
	
	noExamen  VARCHAR(10)  NOT NULL,
	noClinique VARCHAR(10) NOT NULL,
	noTraitement VARCHAR(10) NOT NULL,
	quantiteTraitement INTEGER NOT NULL,
	dateDebut DATE NOT NULL,
	dateFin DATE NOT NULL,

	

	
	PRIMARY KEY (noTraitement,noExamen,noClinique),
	Foreign Key  (noExamen,noClinique) REFERENCES Examen(noExamen,noClinique) ON DELETE RESTRICT ON UPDATE CASCADE,
	Foreign Key  (noTraitement) REFERENCES Traitement(noTraitement) ON DELETE RESTRICT ON UPDATE CASCADE
	
);
