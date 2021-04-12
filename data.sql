SET search_path = vetoDb;
TRUNCATE TABLE VetoDB.Clinique CASCADE;
TRUNCATE TABLE VetoDB.Traitement CASCADE;
--TRUNCATE TABLE VetoDB.proprietaireAnimal CASCADE;
INSERT INTO VetoDB.Clinique VALUES('1','Best','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777','888888888');
INSERT INTO VetoDB.Clinique VALUES('2','Worst','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777','888888888');
INSERT INTO VetoDB.Clinique VALUES('3','Sauce','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777','888888888');

INSERT INTO VetoDB.proprietaireAnimal VALUES('1','1','Tremblay','Nicholas','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777');
INSERT INTO VetoDB.proprietaireAnimal VALUES('1','2','Legrand','Nicholas','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777');
INSERT INTO VetoDB.proprietaireAnimal VALUES('1','3','Legrand','Nicholas','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777');
INSERT INTO VetoDB.proprietaireAnimal VALUES('3','1','Legrand','Nicholas','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777');
INSERT INTO VetoDB.proprietaireAnimal VALUES('3','2','Legrand','Nicholas','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','777 777 777');

INSERT INTO VetoDB.Animal VALUES('1','1','1','Rex','Chien','Shiba',0.45,20,'Cute Shiba','2008-11-11','2008-12-11','Vivant');
INSERT INTO VetoDB.Animal VALUES('2','2','1','Guru','Chien','Shiba',0.45,20,'Cute Shiba','2008-11-11','2008-12-11','Vivant');
INSERT INTO VetoDB.Animal VALUES('3','1','1','Rex','Chat','Shiba',0.45,20,'Cute Shiba','2008-11-11','2008-12-11','Vivant');
INSERT INTO VetoDB.Animal VALUES('2','1','3','Guru','Chien','Shiba',0.45,20,'Cute Shiba','2008-11-11','2008-12-11','Vivant');
INSERT INTO VetoDB.Animal VALUES('3','2','3','Rex','Chat','Shiba',0.45,20,'Cute Shiba','2008-11-11','2008-12-11','Vivant');


INSERT INTO VetoDB.Employe VALUES('1','1',true,'Prinville','Kervin','Descelles','Saint-Michel','Quebec','Q3E 1M2','232 122 7685','2002-11-11','M','123454',10000);
INSERT INTO VetoDB.Employe VALUES('2','1',false,'Prinville','Kervin','Descelles','Saint-Michel','Quebec','Q3E 1M2','232 122 7685','2002-11-11','M','121454',500000);
INSERT INTO VetoDB.Employe VALUES('3','2',true,'Prinville','Calvin','Descelles','Saint-Michel','Quebec','Q3E 1M2','232 122 7685','1960-11-11','M','121554',5324234);

INSERT INTO VetoDB.Veterinaire VALUES('1',true);

INSERT INTO VetoDB.Examen VALUES('1','1','1','2010-12-11','05:00','1','Routine Test');
INSERT INTO VetoDB.Examen VALUES('2','1','1','2010-12-11','05:00','1','Routine Test');


INSERT INTO VetoDb.Traitement VALUES('1','Examen','120');
INSERT INTO VetoDb.Traitement VALUES('2','Advil','30');

ALTER SEQUENCE VetoDb.Facture_nofacture_seq RESTART WITH 1;
INSERT INTO VetoDb.Facture (noExamen,noCLinique,moyenpaiement,date,couttotal,estpaye) VALUES('1','1','carte','2011-02-03',150,true);
INSERT INTO VetoDb.Facture (noExamen,noCLinique,moyenpaiement,date,couttotal,estpaye) VALUES('1','1','carte','2011-02-03',150,true);


INSERT INTO VetoDb.traitementeffectue VALUES('1','1','2','2','2011-02-03','2011-05-03');
INSERT INTO VetoDb.traitementeffectue VALUES('2','1','2','1','2011-02-04','2011-05-03');
INSERT INTO VetoDb.traitementeffectue VALUES('2','1','1','1','2011-02-04','2011-05-03');

 
 Select * from VetoDb.Facture;
