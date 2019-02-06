INSERT INTO usuario (usuario, correo, idHospedaje, nombre, password)
  VALUES('jvelez@casadcristhi.com', 'jvelez@casadcristhi.com', 2, 'Jenifer Velez', 'af446ee9a14f194b95e8b014184c23ce');
-- rol -> 1 SUPERADMIN, 2 ADMIN, 3 RECEPCION
INSERT INTO usuariorol (idRol, idUsuario)VALUES(3,22);