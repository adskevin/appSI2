<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

include_once 'UsuarioDAO.php';
include_once 'CampanhaDAO.php';
include_once 'Usuario_CampanhaDAO.php';
include_once 'ConviteDAO.php';
include_once 'Usuario.php';
include_once 'Campanha.php';
include_once 'Usuario_Campanha.php';
include_once 'Convite.php';
require __DIR__ . './vendor/autoload.php';

$app = AppFactory::create();


// Usuarios ----------------------------------------------------------------------------------------------------------------------------------

$app->get('/api/usuarios', function (Request $request, Response $response, array $args) {
    $dao= new UsuarioDAO;
    $usuarios = $dao->listar();
    $response = $response->withJSON($usuarios);
    return $response;
});

$app->post('/api/usuarios', function (Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $nome_usuario = $data['nome_usuario'];
    $nick = $data['nick'];
    $senha = $data['senha'];

    $usuario = new Usuario (0, $nome_usuario, $nick, $senha);
    $dao= new UsuarioDAO;
    $usuario = $dao->inserir($usuario);

    $payload = json_encode($usuario);

    $response->getBody()->write($payload);
    return $response
            ->withHeader('Content-Type', 'application/json');
});

$app->get('/api/usuarios/{id}', function (Request $request, Response $response, array $args) {
    $id_usuario = $args['id'];
    $dao= new UsuarioDAO;
    $usuario = $dao->buscarPorId($id_usuario);
    $payload = json_encode($usuario);

    $response->getBody()->write($payload);
    return $response
            ->withHeader('Content-Type', 'application/json');
});

$app->put('/api/usuarios/{id}', function (Request $request, Response $response, array $args) {
    $id_usuario = $args['id'];
    $data = $request->getParsedBody();
    $usuario = new Usuario($id_usuario, $data['nome_usuario'], $data['nick'], $data['senha']);

    $dao = new UsuarioDAO;
    $usuario = $dao->atualizar($usuario);

    return $response->withJson($usuario);
});

$app->delete('/api/usuarios/{id_usuario}', function (Request $request, Response $response, array $args) {
    $id_usuario = $args['id_usuario'];

    $dao = new UsuarioDAO;
    $usuario = $dao->deletar($id_usuario);

    return $response->withJson($usuario);
});

// Campanha_Usuario ----------------------------------------------------------------------------------------------------------------------------------

$app->post('/api/campanha_usuario', function (Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $id_usuario = $data['id_usuario'];
    $id_campanha = $data['id_campanha'];

    $usuario_campanha = new Usuario_Campanha (0, $id_campanha, $id_usuario);
    $dao= new Usuario_CampanhaDAO;
    $usuario_campanha = $dao->inserir($usuario_campanha);

    $payload = json_encode($usuario_campanha);

    $response->getBody()->write($payload);
    return $response
            ->withHeader('Content-Type', 'application/json');
});

$app->get('/api/campanha_usuario/{id}', function (Request $request, Response $response, array $args) {
    $id_campanha_usuario = $args['id'];
    $dao= new Usuario_CampanhaDAO;
    $campanha_usuario = $dao->buscarPorId($id_campanha_usuario);
    $payload = json_encode($campanha_usuario);

    $response->getBody()->write($payload);
    return $response
            ->withHeader('Content-Type', 'application/json');
});

$app->put('/api/campanha_usuario/{id}', function (Request $request, Response $response, array $args) {
    $id_campanha_usuario = $args['id'];
    $data = $request->getParsedBody();
    $campanha_usuario = new Usuario_Campanha($id_campanha_usuario, $data['id_campanha'], $data['id_usuario']);

    $dao = new Usuario_CampanhaDAO;
    $campanha_usuario = $dao->atualizar($campanha_usuario);

    return $response->withJson($campanha_usuario);
});

$app->get('/api/campanha_usuario', function (Request $request, Response $response, array $args) {
    $dao= new Usuario_CampanhaDAO;
    $usuario_campanhas = $dao->listar();
    $response = $response->withJSON($usuario_campanhas);
    return $response;
});

$app->delete('/api/campanha_usuario/{id_campanha_usuario}', function (Request $request, Response $response, array $args) {
    $id_campanha_usuario = $args['id_campanha_usuario'];

    $dao = new Usuario_campanhaDAO;
    $campanha_usuario = $dao->deletar($id_campanha_usuario);

    return $response->withJson($campanha_usuario);
});

// Campanha ----------------------------------------------------------------------------------------------------------------------------------

$app->post('/api/campanhas', function (Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $nome_campanha = $data['nome_campanha'];
    $descr_campanha = $data['descr_campanha'];
    $id_mestre = $data['id_mestre'];

    $campanha = new Campanha (0, $nome_campanha, $descr_campanha, $id_mestre);
    $dao= new CampanhaDAO;
    $campanha = $dao->inserir($campanha);

    $payload = json_encode($campanha);

    $response->getBody()->write($payload);
    return $response
            ->withHeader('Content-Type', 'application/json');
});

$app->get('/api/campanhas/{id}', function (Request $request, Response $response, array $args) {
    $id_campanha = $args['id'];
    $dao= new CampanhaDAO;
    $campanha = $dao->buscarPorId($id_campanha);
    $payload = json_encode($campanha);

    $response->getBody()->write($payload);
    return $response
            ->withHeader('Content-Type', 'application/json');
});

$app->put('/api/campanhas/{id}', function (Request $request, Response $response, array $args) {
    $id_campanha = $args['id'];
    $data = $request->getParsedBody();
    $campanha = new Campanha($id_campanha, $data['nome_campanha'], $data['descr_campanha'], $data['id_mestre']);

    $dao = new CampanhaDAO;
    $campanha = $dao->atualizar($campanha);

    return $response->withJson($campanha);
});

$app->get('/api/campanhas', function (Request $request, Response $response, array $args) {
    $dao= new CampanhaDAO;
    $campanhas = $dao->listar();
    $response = $response->withJSON($campanhas);
    return $response;
});

$app->delete('/api/campanhas/{id}', function (Request $request, Response $response, array $args) {
    $id_campanha = $args['id'];

    $dao = new CampanhaDAO;
    $campanha = $dao->deletar($id_campanha);

    return $response->withJson($campanha);
});

// Convite ----------------------------------------------------------------------------------------------------------------------------------

$app->post('/api/convites', function (Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $id_usuario = $data['id_usuario'];
    $id_campanha = $data['id_campanha'];
    $status = $data['status'];

    $convite = new Convite (0, $id_usuario, $id_campanha, $status);
    $dao= new ConviteDAO;
    $convite = $dao->inserir($convite);

    $payload = json_encode($convite);

    $response->getBody()->write($payload);
    return $response
            ->withHeader('Content-Type', 'application/json');
});

$app->put('/api/convites/{id}', function (Request $request, Response $response, array $args) {
    $id_convite = $args['id'];
    $data = $request->getParsedBody();
    $convite = new Convite($id_convite, $data['id_usuario'], $data['id_campanha'], $data['status']);

    $dao = new ConviteDao;
    $convite = $dao->atualizar($convite);

    return $response->withJson($convite);
});

$app->get('/api/convites/{id}', function (Request $request, Response $response, array $args) {
    $id_convite = $args['id'];
    $dao= new ConviteDAO;
    $convite = $dao->buscarPorId($id_convite);
    $payload = json_encode($convite);

    $response->getBody()->write($payload);
    return $response
            ->withHeader('Content-Type', 'application/json');
});

$app->get('/api/convites', function (Request $request, Response $response, array $args) {
    $dao= new ConviteDAO;
    $convites = $dao->listar();
    $response = $response->withJSON($convites);
    return $response;
});

$app->delete('/api/convites/{id}', function (Request $request, Response $response, array $args) {
    $id_convite = $args['id'];

    $dao = new ConviteDAO;
    $convite = $dao->deletar($id_convite);

    return $response->withJson($convite);
});

$app->run();