SET search_path = vetoDb;
TRUNCATE TABLE VetoDB.Clinique CASCADE;
TRUNCATE TABLE VetoDB.Traitement CASCADE;
--TRUNCATE TABLE VetoDB.proprietaireAnimal CASCADE;
INSERT INTO VetoDB.Clinique VALUES('1','Best','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777','888888888');

INSERT INTO VetoDB.proprietaireAnimal VALUES('1','1','Legrand','Nicholas','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777');


INSERT INTO VetoDB.Animal VALUES('1','1','1','Rex','Chien','Shiba',0.45,20,'Cute Shiba','2008-11-11','2008-12-11','Vivant');


INSERT INTO VetoDB.Employe VALUES('1','1',true,'Prinville','Kervin','Descelles','Saint-Michel','Quebec','Q3E 1M2','232 122 7685','2002-11-11','M','123454');
INSERT INTO VetoDB.Veterinaire VALUES('1',true);

INSERT INTO VetoDB.Examen VALUES('1','1','1','2010-12-11','05:00','1','Routine Test');

INSERT INTO VetoDb.Traitement VALUES('1','Examen','120');
INSERT INTO VetoDb.Traitement VALUES('2','Advil','30');

INSERT INTO VetoDb.Facture VALUES('1','1','1','carte','2011-02-03',150,true);

INSERT INTO VetoDb.traitementeffectue VALUES('1','1','1','2','2','2011-02-03','2011-05-03');

