SET search_path = vetoDb;



-- Lister les le numéro et nom des cliniques, leur adresse et leur gestionnaire, ordonnés par le numéro de clinique
Select C.noClinique, C.nom, C.rue, C.ville, C.Province,C.codepostal ,E.nom as NomGestionnaire, E.prenom as NomGestionnaire
FROM VetoDb.Employe E, VetoDb.Clinique C
WHERE estGestionnaire = true and C.noClinique = E.noClinique
ORDER BY C.noClinique;


-- Quels sont les noms des employés de plus de 40 ans ordonnés par nom ?
Select noClinique, noEmploye, nom, prenom
FROM VetoDB.Employe
WHERE date_part('year',AGE(Current_Date,dateNaissance)) > 40
ORDER BY nom,prenom;

-- Lister les noms des animaux dans toutes les cliniques ainsi que le nombre de fois où ils apparaissent. Par exemple Charlie, 3
Select nom, COUNT(nom) As Compte
FROM VetoDB.Animal
GROUP BY nom
ORDER BY nom;


-- Lister les numéros et noms des propriétaires d’animaux ainsi que les détails de leurs animaux dans une clinique donnée (à vous de la choisir)
Select p.noProprietaire, p.nom, p.prenom, a.noAnimal, a.nom, a.type, a.espece, a.taille, a.poids, a.description, a.dateNaissance, a.dateInscription
From VetoDB.ProprietaireAnimal p, VetoDB.Animal a
WHERE a.noproprietaire = p.noproprietaire and a.noClinique = p.noClinique and p.noClinique = '1';

--Lister l’ensemble des examens d’un animal donné en utilisant sa clé primaire
SELECT *
FROM VetoDB.Examen
WHERE (noAnimal, noClinique) IN(
	SELECT noAnimal, noClinique
	FROM VetoDB.Animal
	WHERE true); --Inserer choix danimal/clinique ici

-- Lister le détail des traitements d’un animal suite à un examen donné
SELECT A.noTraitement, T.description, A.quantiteTraitement,A.DateDebut,A.DateFin
FROM VetoDB.TraitementEffectue A, VetoDB.Traitement T
WHERE (noExamen, noClinique) IN(
	SELECT noExamen, noClinique
	FROM VetoDB.Examen
	WHERE true) --Inserer choix examen/clinique ici
AND
T.noTraitement = A.noTraitement;

-- Lister le salaire total des employés par clinique ordonné par numéro de clinique
SELECT SUM(salaire)
FROM VetoDB.Employe
GROUP BY noClinique
ORDER BY noClinique;

-- Lister le nombre total d’animaux par type dans chaque clinique.
SELECT noClinique, type, COUNT(*)
FROM VetoDB.Animal
GROUP BY noClinique, type
ORDER BY animal.noClinique, type;

-- Lister le coût minimum, maximum et moyen des traitements
SELECT MIN(cout) as minimum, MAX(cout) as maximum, ROUND(AVG(cout),2) as Moyenne
FROM VetoDB.Traitement;

-- Quels sont les propriétaires dont le nom contient « blay » ?
SELECT *
FROM VetoDB.ProprietaireAnimal
WHERE nom LIKE '%blay%';

-- Supprimez le vétérinaire « Jean Tremblay » qui travaille dans la clinique dont l’identificateur est C01.
DELETE
FROM Employe
WHERE noClinique = 'C01' AND nom = 'Tremblay' AND prenom = 'Jean';

-- Lister les détails des propriétaires qui ont un chat et un chien
SELECT Distinct *
FROM VetoDB.ProprietaireAnimal
WHERE (noClinique, noProprietaire) IN(
	SELECT noClinique, noProprietaire
	FROM VetoDB.Animal
	WHERE type = 'Chien'
)
AND
(noClinique, noProprietaire) IN(
	SELECT noClinique, noProprietaire
	FROM VetoDB.Animal
	WHERE type = 'Chat'
);


-- Lister les détails des propriétaires qui ont un chat ou un chien
SELECT Distinct *
FROM VetoDB.ProprietaireAnimal
WHERE (noClinique, noProprietaire) IN(
	SELECT noClinique, noProprietaire
	FROM VetoDB.Animal
	WHERE type = 'Chien' OR type = 'Chat'
);

-- Lister les détails des propriétaires qui ont un chat mais pas de chien vacciné contre la grippe
SELECT Distinct *
FROM VetoDB.ProprietaireAnimal
WHERE (noClinique, noProprietaire) NOT IN(
	SELECT noClinique, noProprietaire
	FROM VetoDB.Animal
	WHERE type = 'Chien' AND (noAnimal,noClinique) IN(
		SELECT noAnimal,noClinique
		FROM VetoDB.Examen
		WHERE (noClinique,noExamen) IN(
			SELECT noClinique,noExamen
			FROM VetoDB.TraitementEffectue
			WHERE noTraitement IN (
				SELECT noTraitement
				FROM Traitement
				WHERE description = 'Vaccination contre la grippe'
			)
		)
	)
	
)
AND
(noClinique, noProprietaire) IN(
	SELECT noClinique, noProprietaire
	FROM VetoDB.Animal
	WHERE type = 'Chat'
);

-- Lister tous les animaux d’une clinique donnée avec leurs traitements s’ils existent.
SELECT Animal.nom, TraitementEffectue.*
FROM VetoDB.TraitementEffectue
INNER JOIN VetoDB.Animal
ON Animal.noAnimal IN (
	SELECT noAnimal
	FROM VetoDB.Examen
	WHERE (noClinique, noExamen) IN (
		SELECT noClinique, noExamen
		FROM VetoDB.TraitementEffectue
	)
)