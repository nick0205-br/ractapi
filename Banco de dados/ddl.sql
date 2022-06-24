create database infodanime;
use infodanime;

create table tb_listaanimes(
	id_anime	  int primary key auto_increment,
    nm_nome		  varchar(200),
    ds_sinopse    varchar(200),
    dt_lancamento date
);