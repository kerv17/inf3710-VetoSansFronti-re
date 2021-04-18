SET search_path = vetoDb;
TRUNCATE TABLE VetoDB.Clinique CASCADE;
TRUNCATE TABLE VetoDB.Traitement CASCADE;
--TRUNCATE TABLE VetoDB.proprietaireAnimal CASCADE;
INSERT INTO VetoDB.Clinique VALUES('1',' Clinique Best','Sainte-Cathrine','Montreal','Quebec','H2L 1K9','427 280 995','842 456 558');
INSERT INTO VetoDB.Clinique VALUES('2','Clinique Safari','Burberrry','Calgary','Alberta','H2L 1K9','390 337 416','591 544 371');
INSERT INTO VetoDB.Clinique VALUES('3','Clinique Citron-Miel','Yonge','Toronto','Ontario','H2L 1K9','327 829 919','712 938 769');

INSERT INTO VetoDB.proprietaireAnimal VALUES('1','1','Tremblay','Ben','Montcalm','Montreal','Quebec','H9R 1A1','151 629 980');
INSERT INTO VetoDB.proprietaireAnimal VALUES('1','2','Lafleur','Emily','Decelles','Montreal','Quebec','P3A 4K1','418 791 455');
INSERT INTO VetoDB.proprietaireAnimal VALUES('1','3','Atwater','Noé','Henri-Bourassa','Montreal','Quebec','B4V 9N5','470 142 402');
INSERT INTO VetoDB.proprietaireAnimal VALUES('3','1','Gravel','Justine','Rememberance','Toronto','Ontario','M8V 3K2','537 272 630');
INSERT INTO VetoDB.proprietaireAnimal VALUES('3','2','Dylan','Nicholas','Bird','Toronto','Ontario','P2B 8H3','645 304 847');
INSERT INTO VetoDB.proprietaireAnimal VALUES('2','1','Césaire','Kate','Universal','Calgary','Alberta','E3E 5P9','332 866 237');

INSERT INTO VetoDB.Animal VALUES('1','1','1','Moose','Chien','Doberman',0.194,82,'Noir','2020-07-19','2020-08-10','Vivant');
INSERT INTO VetoDB.Animal VALUES('2','1','2','Silvester','Chat','Siamois',0.466,66,'Noir','2020-09-02','2020-10-05','Vivant');
INSERT INTO VetoDB.Animal VALUES('3','1','3','Tiffany','Chat','Chartreux',0.807,73,'Blanc','2020-04-27','2020-05-24','Vivant');
INSERT INTO VetoDB.Animal VALUES('1','2','1','Benji','Tortue','Shiba',0.418,25,'Carapace dure','2020-07-30','2020-08-04','Vivant');
INSERT INTO VetoDB.Animal VALUES('2','2','1','Simba','Chat','Mandarin',0.449,61,'Orange','2020-04-21','2020-07-14','Vivant');
INSERT INTO VetoDB.Animal VALUES('3','2','1','Rex','Chien','Rottweiler',0.522,15,'Gros','2020-11-25','2020-12-15','Vivant');
INSERT INTO VetoDB.Animal VALUES('1','3','1','Milou','Chien','Shiba',0.976,44,'Blanc','2020-05-24','2020-06-02','Vivant');
INSERT INTO VetoDB.Animal VALUES('2','3','1','Tequila','Oiseau','Perroquet',0.155,78,'Multicolore','2020-09-15','2020-10-18','Vivant');
INSERT INTO VetoDB.Animal VALUES('3','3','2','Cooper','Serpent','Boa',1.458,92,'Long','2020-06-10','2020-06-22','Vivant');
INSERT INTO VetoDB.Animal VALUES('4','3','2','Poochie','Chien','Berger Allemand',0.682,20,'Gris','2020-08-04','2020-08-05','Vivant');


INSERT INTO VetoDB.Employe VALUES('1','1',true,'Calos','Jules','Moor Banks','Saint-Michel','Quebec','B2G 4E8','519 981 646','1957-11-04','M','544549199',42059);
INSERT INTO VetoDB.Employe VALUES('2','2',true,'Steele','Elijah','Main Edge','Laval','Quebec','E4V 6A0','418 879 408','1963-04-19','M','691670176',31074);
INSERT INTO VetoDB.Employe VALUES('3','1',false,'Gregors','Gary','Marine Promenade','Montreal','Quebec','G3H 3H7','762 880 124','1983-07-14','M','777172170',76468);
INSERT INTO VetoDB.Employe VALUES('4','2',false,'Freeman','Sheldon','Sea View Wynd','Longeuil','Quebec','V9Y 5K0','694 102 571','1989-06-06','M','314618921',95821);
INSERT INTO VetoDB.Employe VALUES('5','3',true,'Anatoly','Grace','Saffron Crescent','Sherbrooke','Quebec','V7B 9Y4','830 604 109','1992-07-06','F','881955889',93362);
INSERT INTO VetoDB.Employe VALUES('6','3',false,'Hudson','Geneviève','Sutton Parkway','Sherbrooke','Quebec','K7S 3J1','467 490 644','2001-12-26','F','416164285',73128);

INSERT INTO VetoDB.Veterinaire VALUES('1',true);
INSERT INTO VetoDB.Veterinaire VALUES('2',false);
INSERT INTO VetoDB.Veterinaire VALUES('5',true);


INSERT INTO VetoDB.Examen VALUES('1','1','1','2017-01-23','05:00','1','Routine Test');
INSERT INTO VetoDB.Examen VALUES('2','1','1','2019-06-14','04:00','1','Nausée');
INSERT INTO VetoDB.Examen VALUES('3','2','1','2019-12-16','01:00','1','Rayon-X');
INSERT INTO VetoDB.Examen VALUES('4','2','1','2020-01-16','03:00','1','Prelevement sanguin');
INSERT INTO VetoDB.Examen VALUES('5','3','1','2017-07-13','05:00','1','Routine Test');
INSERT INTO VetoDB.Examen VALUES('6','3','1','2016-05-05','04:00','1','Vaccination');
INSERT INTO VetoDB.Examen VALUES('1','1','2','2016-06-30','05:00','2','Routine Test');
INSERT INTO VetoDB.Examen VALUES('2','1','2','2017-12-08','03:00','2','Nausée');
INSERT INTO VetoDB.Examen VALUES('3','2','2','2019-08-21','02:00','2','Rayon-X');
INSERT INTO VetoDB.Examen VALUES('4','2','2','2021-09-01','06:00','2','Nausée');
INSERT INTO VetoDB.Examen VALUES('5','3','2','2017-10-06','01:00','2','Prelevement');
INSERT INTO VetoDB.Examen VALUES('6','3','2','2018-10-01','04:00','2','Degriffage');
INSERT INTO VetoDB.Examen VALUES('1','1','3','2018-10-18','05:00','5','Vaccination');
INSERT INTO VetoDB.Examen VALUES('2','1','3','2018-04-24','05:00','5','Vaccination');
INSERT INTO VetoDB.Examen VALUES('3','2','3','2017-01-17','04:00','5','Rayon-X');
INSERT INTO VetoDB.Examen VALUES('4','2','3','2018-03-01','03:00','5','Prelevement sanguin');
INSERT INTO VetoDB.Examen VALUES('5','3','3','2019-12-02','01:00','5','Routine Test');
INSERT INTO VetoDB.Examen VALUES('6','3','3','2020-09-17','02:00','5','Nausée');
INSERT INTO VetoDB.Examen VALUES('7','4','3','2021-07-19','02:00','5','Routine Test');
INSERT INTO VetoDB.Examen VALUES('8','4','3','2018-09-24','05:00','5','Nausée');


INSERT INTO VetoDb.Traitement VALUES('1','Examen','120');
INSERT INTO VetoDb.Traitement VALUES('2','Advil','30');
INSERT INTO VetoDb.Traitement VALUES('3','Vaccination','40');
INSERT INTO VetoDb.Traitement VALUES('4','Castration','50');

INSERT INTO VetoDb.traitementeffectue VALUES('1','1','1','2','2011-02-03','2019-06-13');
INSERT INTO VetoDb.traitementeffectue VALUES('1','1','2','5','2011-02-03','2019-06-23');
INSERT INTO VetoDb.traitementeffectue VALUES('2','1','2','1','2011-02-04','2019-05-03');
INSERT INTO VetoDb.traitementeffectue VALUES('2','1','1','1','2011-02-04','2018-04-23');
INSERT INTO VetoDb.traitementeffectue VALUES('3','1','4','2','2011-02-03','2018-02-13');
INSERT INTO VetoDb.traitementeffectue VALUES('3','1','3','3','2011-02-03','2018-06-03');
INSERT INTO VetoDb.traitementeffectue VALUES('4','1','2','2','2011-02-03','2018-05-03');
INSERT INTO VetoDb.traitementeffectue VALUES('4','1','4','3','2011-02-03','2017-05-23');
INSERT INTO VetoDb.traitementeffectue VALUES('5','1','2','1','2011-02-03','2017-07-23');
INSERT INTO VetoDb.traitementeffectue VALUES('5','1','3','1','2011-02-03','2017-08-03');
INSERT INTO VetoDb.traitementeffectue VALUES('6','1','2','2','2011-02-03','2017-06-13');
INSERT INTO VetoDb.traitementeffectue VALUES('6','1','3','2','2011-02-03','2017-09-03');

INSERT INTO VetoDb.traitementeffectue VALUES('1','2','1','2','2011-02-03','2018-06-23');
INSERT INTO VetoDb.traitementeffectue VALUES('1','2','2','5','2011-02-03','2019-04-03');
INSERT INTO VetoDb.traitementeffectue VALUES('2','2','2','1','2011-02-04','2017-05-13');
INSERT INTO VetoDb.traitementeffectue VALUES('2','2','1','1','2011-02-04','2018-05-13');
INSERT INTO VetoDb.traitementeffectue VALUES('3','2','4','2','2011-02-03','2019-08-23');
INSERT INTO VetoDb.traitementeffectue VALUES('3','2','3','3','2011-02-03','2017-04-23');
INSERT INTO VetoDb.traitementeffectue VALUES('4','2','2','2','2011-02-03','2019-05-13');
INSERT INTO VetoDb.traitementeffectue VALUES('4','2','4','3','2011-02-03','2018-07-03');
INSERT INTO VetoDb.traitementeffectue VALUES('5','2','2','1','2011-02-03','2017-05-23');
INSERT INTO VetoDb.traitementeffectue VALUES('5','2','3','1','2011-02-03','2017-04-13');
INSERT INTO VetoDb.traitementeffectue VALUES('6','2','2','2','2011-02-03','2019-06-13');
INSERT INTO VetoDb.traitementeffectue VALUES('6','2','3','2','2011-02-03','2018-03-03');

INSERT INTO VetoDb.traitementeffectue VALUES('1','3','1','2','2011-02-03','2016-05-23');
INSERT INTO VetoDb.traitementeffectue VALUES('1','3','2','5','2011-02-03','2018-04-23');
INSERT INTO VetoDb.traitementeffectue VALUES('2','3','2','1','2011-02-04','2017-05-13');
INSERT INTO VetoDb.traitementeffectue VALUES('2','3','1','1','2011-02-04','2015-03-03');
INSERT INTO VetoDb.traitementeffectue VALUES('3','3','4','2','2011-02-03','2017-02-03');
INSERT INTO VetoDb.traitementeffectue VALUES('3','3','3','3','2011-02-03','2018-07-13');
INSERT INTO VetoDb.traitementeffectue VALUES('4','3','2','2','2011-02-03','2019-09-03');
INSERT INTO VetoDb.traitementeffectue VALUES('4','3','4','3','2011-02-03','2017-04-23');
INSERT INTO VetoDb.traitementeffectue VALUES('5','3','2','1','2011-02-03','2018-05-03');
INSERT INTO VetoDb.traitementeffectue VALUES('5','3','3','1','2011-02-03','2016-04-13');
INSERT INTO VetoDb.traitementeffectue VALUES('6','3','2','2','2011-02-03','2017-06-23');
INSERT INTO VetoDb.traitementeffectue VALUES('6','3','3','2','2011-02-03','2016-08-03');
INSERT INTO VetoDb.traitementeffectue VALUES('7','3','1','2','2011-02-03','2017-06-23');
INSERT INTO VetoDb.traitementeffectue VALUES('7','3','2','5','2011-02-03','2018-03-03');
INSERT INTO VetoDb.traitementeffectue VALUES('8','3','2','1','2011-02-04','2016-04-13');
INSERT INTO VetoDb.traitementeffectue VALUES('8','3','1','1','2011-02-04','2016-07-03');

ALTER SEQUENCE VetoDb.Facture_nofacture_seq RESTART WITH 1;
INSERT INTO VetoDb.Facture (noExamen,noCLinique,moyenpaiement,date,couttotal,estpaye) VALUES('1','1','carte','2015-12-16',40,true);
INSERT INTO VetoDb.Facture (noExamen,noCLinique,moyenpaiement,date,couttotal,estpaye) VALUES('2','1','debit','2017-02-14',60,true);
INSERT INTO VetoDb.Facture (noExamen,noCLinique,moyenpaiement,date,couttotal,estpaye) VALUES('1','2','interact','2018-03-05',750,true);
INSERT INTO VetoDb.Facture (noExamen,noCLinique,moyenpaiement,date,couttotal,estpaye) VALUES('2','2','comptant','2016-01-26',45,true);
INSERT INTO VetoDb.Facture (noExamen,noCLinique,moyenpaiement,date,couttotal,estpaye) VALUES('1','3','interact','2017-04-28',100,true);
INSERT INTO VetoDb.Facture (noExamen,noCLinique,moyenpaiement,date,couttotal,estpaye) VALUES('2','3','carte','2018-02-12',150,true);
