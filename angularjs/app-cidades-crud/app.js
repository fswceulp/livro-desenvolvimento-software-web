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

    $scope.cidade = null;

    $scope.salvar = function(cidade) {
        if (!$scope.cidade.edit) {
            var c = angular.copy(cidade);
            $scope.cidades.push(c);
            cidade.nome = "";
            cidade.estado = null;
        } else {
            $scope.cidade = null;
        }
    };

    $scope.excluir = function(index) {
        $scope.cidades.splice(index, 1);
    };

    $scope.editar = function(cidade) {
        $scope.cidade = cidade;
        $scope.cidade.edit = true;
    }
});

})();
