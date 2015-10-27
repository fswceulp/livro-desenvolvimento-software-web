(function(){

function Cidade(estado, nome) {
    this.estado = estado;
    this.nome = nome;
}

function Estado(uf, nome) {
    this.uf = uf;
    this.nome = nome;
}

angular.module('appsimples', []).controller('HomeController', function($scope) {

    function encontrarEstado(uf) {
        for(var i = 0; i < $scope.estados.length; i++) {
            if ($scope.estados[i].uf == uf) {
                return $scope.estados[i];
            }
        }
        return null;
    }

    $scope.estados = [
        new Estado('TO', 'Tocantins'),
        new Estado('SP', 'São Paulo'),
        new Estado('MG', 'Minas Gerais')
        ];

    $scope.cidades = [
        new Cidade(encontrarEstado('TO'), 'Araguaína'),
        new Cidade(encontrarEstado('TO'), 'Gurupi'),
        new Cidade(encontrarEstado('TO'), 'Palmas'),
        new Cidade(encontrarEstado('TO'), 'Porto Nacional'),
        new Cidade(encontrarEstado('TO'), 'Paraíso do Tocantins'),
        new Cidade(encontrarEstado('SP'), 'São Paulo'),
        new Cidade(encontrarEstado('MG'), 'Belo Horizonte')];

    $scope.salvar = function(cidade) {
        if ($scope.form.$valid) {
            $scope.cidades.push(angular.copy(cidade));
            $scope.form.$setPristine();
            $scope.cidade = {};
        }
    }
});

})();
