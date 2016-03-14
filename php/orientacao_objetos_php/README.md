#Orientação a Objetos em PHP
O propósito aqui não é discutir a literatura de Orientação a Objetos, por isso, não vamos abordar com detalhes seus conceitos. A discussão sempre será direcionada para a definição de determinados conceitos da OO na linguagem PHP. 

[Clssses e Objetos](classes-objetos.md)

[Construtores](metodos-construtores.md)

[Propriedades](propriedades.md)

[Herança](heranca.md)




>**EXERCÍCIOS**

>Exercício 1:Utilizando conceitos de Orientação a Objetos, considere o domínio apresentado a seguir para desenvolvimento de uma solução em PHP. 

**Descrição do problema:**

Um Serviço de Entrega Expresso oferece serviços de entregas de pacotes. Cada pacote possui código, remetente, destinatário e peso (em quilos).  O custo de envio de cada pacote é de acordo com o seu peso: R$ 5,00 (cinco reais) por quilo. Os remetentes e os destinatários são clientes cadastrados na empresa. Os dados dos clientes são: código, nome e endereço completo. Este tipo de envio de pacote está enquadrado na categoria Pacote Normal.

Também há outra opção de entrega **Pacote24Horas**, com os seguintes dados: código, remetente, destinatário, peso (em quilos) e um adicional. O adicional é calculado com base em um percentual informado no momento do cadastro de um pacote. O custo do envio é de R$ 5.00 por quilo mais o percentual adicional sobre o valor.

De acordo com a descrição mostrada previamente, implementa um conjunto de classes baseando-se nos conceitos de OO. Sempre que possível, utilize Herança, Polimorfismo e encapsulamento.  As classes devem oferecer construtor parametrizado (inicializa todos os atributos).

Além disso, as seguintes instruções devem ser atendidas: 

* A implementação deve oferecer também o método **calculaCusto()**, que retorna o valor a ser pago com o envio do pacote.
* Deve existir um método para Excluir pacote (pelo código). Se o pacote for excluído com sucesso, então o método deve True, caso contrário, False. Caso a exclusão não ocorra, deve ser impressa uma mensagem de erro no navegador. 
* Cadastre diretamente no código, pelo menos: quatro clientes (lista de clientes); e dois pacotes (lista de pacotes), sendo um deles **Pacote24Horas**.
* Deve existir um método que pesquise pacote (pelo código). Se o código for inválido, deve ser apresentada uma mensagem de aviso.
* Deve existir um método que imprima um relatório de pacotes. Este relatório deve conter: código do pacote, nome do remetente e do destinatário, tipo de pacote (Normal ou 24Horas) e valor de cada pacote, e um valor total com todos os pacotes envaidos(cadastrados).



