-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Dez-2019 às 04:21
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_tab1_v2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `campanha`
--

CREATE TABLE `campanha` (
  `id_campanha` int(30) NOT NULL,
  `nome_campanha` varchar(30) NOT NULL,
  `descr_campanha` text NOT NULL,
  `id_mestre` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `campanha`
--

INSERT INTO `campanha` (`id_campanha`, `nome_campanha`, `descr_campanha`, `id_mestre`) VALUES
(1, 'Campanhasssssssssa2', 'Campanha de teste da api', 1),
(3, 'Campanhassa 2', 'Campanha de teste da api 2', 1),
(4, 'Campanhassa 4', 'Campanha de teste da api 3', 2),
(5, 'Campanhassa 4', 'Campanha de teste da api 3', 2),
(6, 'Campanha', 'Campanha de teste da api', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `convite`
--

CREATE TABLE `convite` (
  `id_convite` int(30) NOT NULL,
  `id_usuario` int(30) NOT NULL,
  `id_campanha` int(30) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `convite`
--

INSERT INTO `convite` (`id_convite`, `id_usuario`, `id_campanha`, `status`) VALUES
(3, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(30) NOT NULL,
  `nome_usuario` varchar(100) NOT NULL,
  `nick` varchar(20) NOT NULL,
  `senha` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome_usuario`, `nick`, `senha`) VALUES
(1, 'AlteradoKevin3343444444444444444', 'KevinDiferenteddddda', '54321'),
(2, 'Kevin1', 'zKewin1', '12345'),
(3, 'Kevin3', 'zKewin3', '12345'),
(4, 'AlteradoKevin', 'KevinDiferente232', '54321'),
(23, 'aaaaaaaaaaaaaa', 'asdfsdf', 'aaa'),
(24, 'hththt', 'kiuyttr', 'ddddd');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario_campanha`
--

CREATE TABLE `usuario_campanha` (
  `id_campanha_usuario` int(30) NOT NULL,
  `id_campanha` int(30) NOT NULL,
  `id_usuario` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario_campanha`
--

INSERT INTO `usuario_campanha` (`id_campanha_usuario`, `id_campanha`, `id_usuario`) VALUES
(5, 3, 3),
(6, 1, 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `campanha`
--
ALTER TABLE `campanha`
  ADD PRIMARY KEY (`id_campanha`),
  ADD KEY `campanha_fk0` (`id_mestre`);

--
-- Índices para tabela `convite`
--
ALTER TABLE `convite`
  ADD PRIMARY KEY (`id_convite`),
  ADD KEY `convite_fk0` (`id_usuario`),
  ADD KEY `convite_fk1` (`id_campanha`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `nick` (`nick`);

--
-- Índices para tabela `usuario_campanha`
--
ALTER TABLE `usuario_campanha`
  ADD PRIMARY KEY (`id_campanha_usuario`),
  ADD KEY `usuario_campanha_fk0` (`id_campanha`),
  ADD KEY `usuario_campanha_fk1` (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `campanha`
--
ALTER TABLE `campanha`
  MODIFY `id_campanha` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `convite`
--
ALTER TABLE `convite`
  MODIFY `id_convite` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `usuario_campanha`
--
ALTER TABLE `usuario_campanha`
  MODIFY `id_campanha_usuario` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `campanha`
--
ALTER TABLE `campanha`
  ADD CONSTRAINT `campanha_fk0` FOREIGN KEY (`id_mestre`) REFERENCES `usuario` (`id_usuario`);

--
-- Limitadores para a tabela `convite`
--
ALTER TABLE `convite`
  ADD CONSTRAINT `convite_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `convite_fk1` FOREIGN KEY (`id_campanha`) REFERENCES `campanha` (`id_campanha`);

--
-- Limitadores para a tabela `usuario_campanha`
--
ALTER TABLE `usuario_campanha`
  ADD CONSTRAINT `usuario_campanha_fk0` FOREIGN KEY (`id_campanha`) REFERENCES `campanha` (`id_campanha`),
  ADD CONSTRAINT `usuario_campanha_fk1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
