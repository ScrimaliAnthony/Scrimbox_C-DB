-- Fonction chemin categorie_nv1

CREATE OR REPLACE FUNCTION set_chemin_categorie_nv1()
RETURNS TRIGGER AS $$
BEGIN
    NEW.chemin_nv1 := NEW.id_nv1::TEXT;

    NEW.code := NEW.chemin_nv1::INT;

    NEW.chemin_nv1 := NEW.chemin_nv1::TEXT || '/';
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Fonction chemin categorie_nv2

CREATE OR REPLACE FUNCTION set_chemin_categorie_nv2()
RETURNS TRIGGER AS $$
DECLARE
    parent_chemin TEXT;
    dernier_numero INT;
    code_parent INT;
BEGIN
    SELECT chemin_nv1
    INTO parent_chemin
    FROM categorie_nv1
    WHERE id_nv1 = NEW.id_nv1;

    SELECT code
    INTO code_parent
    FROM categorie_nv1
    WHERE id_nv1 = NEW.id_nv1;

    SELECT COALESCE(MAX(SPLIT_PART(chemin_nv2, '/', 2)::INT), 0)
    INTO dernier_numero
    FROM categorie_nv2
    WHERE id_nv1 = NEW.id_nv1;

    dernier_numero := dernier_numero + 1;

    NEW.code := CAST(code_parent::TEXT || dernier_numero::TEXT AS INTEGER);

    NEW.chemin_nv2 :=  parent_chemin || dernier_numero::TEXT || '/';

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Fonction chemin categorie_nv3

CREATE OR REPLACE FUNCTION set_chemin_categorie_nv3()
RETURNS TRIGGER AS $$
DECLARE
parent_chemin TEXT;
dernier_numero INT;
code_parent INT;
BEGIN
    SELECT chemin_nv2
    INTO parent_chemin
    FROM categorie_nv2
    WHERE id_nv2 = NEW.id_nv2;

    SELECT code
    INTO code_parent
    FROM categorie_nv2
    WHERE id_nv2 = NEW.id_nv2;

    SELECT COALESCE(MAX(SPLIT_PART(chemin_nv3, '/', 3)::INT), 0)
    INTO dernier_numero
    FROM categorie_nv3
    WHERE id_nv2 = NEW.id_nv2;

    dernier_numero := dernier_numero + 1;

    NEW.code := CAST(code_parent::TEXT || dernier_numero::TEXT AS INTEGER);

    NEW.chemin_nv3 :=  parent_chemin || dernier_numero::TEXT || '/';

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Fonction chemin categorie_nv4

CREATE OR REPLACE FUNCTION set_chemin_categorie_nv4()
RETURNS TRIGGER AS $$
DECLARE
parent_chemin TEXT;
dernier_numero INT;
code_parent INT;
BEGIN
    SELECT chemin_nv3
    INTO parent_chemin
    FROM categorie_nv3
    WHERE id_nv3 = NEW.id_nv3;

    SELECT code
    INTO code_parent
    FROM categorie_nv3
    WHERE id_nv3 = NEW.id_nv3;

    SELECT COALESCE(MAX(SPLIT_PART(chemin_nv4, '/', 4)::INT), 0)
    INTO dernier_numero
    FROM categorie_nv4
    WHERE id_nv3 = NEW.id_nv3;

    dernier_numero := dernier_numero + 1;

    NEW.code := CAST(code_parent::TEXT || dernier_numero::TEXT AS INTEGER);

    NEW.chemin_nv4 :=  parent_chemin || dernier_numero::TEXT || '/';

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Fonction chemin categorie_nv5

CREATE OR REPLACE FUNCTION set_chemin_categorie_nv5()
RETURNS TRIGGER AS $$
DECLARE
parent_chemin TEXT;
dernier_numero INT;
code_parent INT;
BEGIN
    SELECT chemin_nv4
    INTO parent_chemin
    FROM categorie_nv4
    WHERE id_nv4 = NEW.id_nv4;

    SELECT code
    INTO code_parent
    FROM categorie_nv4
    WHERE id_nv4 = NEW.id_nv4;

    SELECT COALESCE(MAX(SPLIT_PART(chemin_nv5, '/', 5)::INT), 0)
    INTO dernier_numero
    FROM categorie_nv5
    WHERE id_nv4 = NEW.id_nv4;

    dernier_numero := dernier_numero + 1;

    NEW.code := CAST(code_parent::TEXT || dernier_numero::TEXT AS INTEGER);

    NEW.chemin_nv5 :=  parent_chemin || dernier_numero::TEXT || '/';

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Fonction chemin categorie_nv6

CREATE OR REPLACE FUNCTION set_chemin_categorie_nv6()
RETURNS TRIGGER AS $$
DECLARE
parent_chemin TEXT;
dernier_numero INT;
code_parent INT;
BEGIN
    SELECT chemin_nv5
    INTO parent_chemin
    FROM categorie_nv5
    WHERE id_nv5 = NEW.id_nv5;

    SELECT code
    INTO code_parent
    FROM categorie_nv5
    WHERE id_nv5 = NEW.id_nv5;

    SELECT COALESCE(MAX(SPLIT_PART(chemin_nv6, '/', 6)::INT), 0)
    INTO dernier_numero
    FROM categorie_nv6
    WHERE id_nv5 = NEW.id_nv5;

    dernier_numero := dernier_numero + 1;

    NEW.code := CAST(code_parent::TEXT || dernier_numero::TEXT AS INTEGER);

    NEW.chemin_nv6 :=  parent_chemin || dernier_numero::TEXT || '/';

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;