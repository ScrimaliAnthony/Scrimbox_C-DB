-- TRIGGER chemin categorie_nv1

CREATE TRIGGER trigger_set_chemin_categorie_nv1
BEFORE INSERT
ON categorie_nv1
FOR EACH ROW
EXECUTE FUNCTION set_chemin_categorie_nv1();

-- TRIGGER chemin categorie_nv2

CREATE TRIGGER trigger_set_chemin_categorie_nv2
BEFORE INSERT
ON categorie_nv2
FOR EACH ROW
EXECUTE FUNCTION set_chemin_categorie_nv2();

-- TRIGGER chemin categorie_nv3

CREATE TRIGGER trigger_set_chemin_categorie_nv3
BEFORE INSERT
ON categorie_nv3
FOR EACH ROW
EXECUTE FUNCTION set_chemin_categorie_nv3();

-- TRIGGER chemin categorie_nv4

CREATE TRIGGER trigger_set_chemin_categorie_nv4
BEFORE INSERT
ON categorie_nv4
FOR EACH ROW
EXECUTE FUNCTION set_chemin_categorie_nv4();

-- TRIGGER chemin categorie_nv5

CREATE TRIGGER trigger_set_chemin_categorie_nv5
BEFORE INSERT
ON categorie_nv5
FOR EACH ROW
EXECUTE FUNCTION set_chemin_categorie_nv5();

-- TRIGGER chemin categorie_nv6

CREATE TRIGGER trigger_set_chemin_categorie_nv6
BEFORE INSERT
ON categorie_nv6
FOR EACH ROW
EXECUTE FUNCTION set_chemin_categorie_nv6();