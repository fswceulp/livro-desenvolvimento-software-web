(function(){

angular.module('appsimples', [])
.controller('HomeController', function($scope) {
    $scope.cidades = ['Araguaína', 'Gurupi', 'Palmas', 'Paraíso', 'Porto Nacional'];
    $scope.salvar = function(cidade) {
        $scope.cidades.push(cidade);
    }
});

})();
