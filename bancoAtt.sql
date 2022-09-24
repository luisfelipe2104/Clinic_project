create database hospital;
use hospital;

create table hospitais(
	id_hospital int primary key auto_increment,
    nome varchar(50) not null,
    cnpj int(14) not null unique,
    endereco varchar(50) not null    
);

create table usuario(
	id_usuario int primary key auto_increment not null,
    tipo_usuario enum('medico e/ou enfermeiro', 'comum', 'administracao')
);

create table paciente(
	id_paciente int primary key auto_increment not null,
    nome_completo varchar(100) not null,
    cpf varchar(11) not null,
    email varchar(100) not null,
    telefone varchar(20) not null,
    
    FK_id_usuario int not null,
    
    constraint FK_id_usuario_paciente foreign key(FK_id_usuario) references usuario(id_usuario)
);

create table medicos(
	id_medico int primary key auto_increment not null,
    nome_completo varchar(100) not null,
    crm varchar(11) not null,
    email varchar(100) not null,
    telefone varchar(20) not null,
    FK_id_hospital int not null,
    FK_id_usuario_medicos int not null,
    
    constraint FK_id_hospital_medicos foreign key(FK_id_hospital) references hospitais(id_hospital),
    constraint FK_id_usuario_medicos foreign key(FK_id_usuario_medicos) references usuario(id_usuario)
);

create table enfermeiros(
	id_enfermeiro int primary key auto_increment not null,
    nome_completo varchar(100) not null,
    coren varchar(15) not null,
    email varchar(100) not null,
    telefone varchar(20) not null,
    FK_id_hospital int not null,
    FK_id_usuario_enfermeiros int not null,
    
    constraint FK_id_hospital_enfermeiros foreign key(FK_id_hospital) references hospitais(id_hospital),
    constraint FK_id_usuario_enfermeiros foreign key(FK_id_usuario_enfermeiros) references usuario(id_usuario)
);

create table consulta(
	id_consulta int primary key auto_increment not null,
    relatorio varchar(1000) not null,
    horario_consulta date not null,
    endereco_consulta varchar(100) not null,
    sala int not null,
    
    FK_id_paciente int not null,
    FK_id_medico int not null,
    FK_id_enfermeiro int,
    
    constraint FK_id_paciente foreign key(FK_id_paciente) references paciente(id_paciente),
    constraint FK_id_medico foreign key(FK_id_medico) references medicos(id_medico),
    constraint FK_id_enfermeiro foreign key(FK_id_enfermeiro) references enfermeiros(id_enfermeiro)
);

create table medicamentos(
	id_medicacao int primary key auto_increment not null,
    prescricao_medica varchar(1000) not null,
    
    FK_id_consulta_medicamentos int not null,
    
    constraint FK_id_consulta_medicamentos foreign key(FK_id_consulta_medicamentos) references consulta(id_consulta)
);

create table sala(
	id_sala int primary key auto_increment not null,
    tipo_sala varchar(30) not null,
    
    FK_id_consulta_sala int not null,
    
    constraint FK_id_consulta_sala foreign key(FK_id_consulta_sala) references consulta(id_consulta)
);

/*insert into paciente(nome_completo, cpf, email, telefone)
	values	("Osmar bruno", "545646", "brunoasos@janej.com", "1513513542"),
			("bruno", "545", "ljsnfd@janej.com", "1513513542");
    
insert into consulta(relatorio, horario_consulta, FK_id_paciente, endereco_consulta) 
	values("Acontecendo tal coisa", "2022/09/23", 1, "Rua das camélias");

select * from consulta;*/

#drop database hospital;