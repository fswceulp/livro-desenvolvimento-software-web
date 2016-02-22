<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
<head>
    <title>Tabuada</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }
        .header{
            width: 100%;
            height: 100px;
            margin-bottom:10px;
            background-color:dodgerblue;
        }
        .header h2{
            padding-top: 40px;
            text-align:center;
            color: #FFF;
        }

        .conteudo{
            width: 940px;
            margin: 0 auto;
        }
        .conteudo h4{
            text-align: center;
            padding: 10px 0;
        }
    </style>
</head>
<body>
<div class="header">
    <h2>Tabuadas</h2>
</div>
<div class="conteudo">
    <table style="border: 1px solid #000;">
        <h4>Tabuada Multiplicação</h4>
        <!--Apenas o título da tabela-->
        <tr>
            <?php for ($k = 1; $k <= 10; $k++): ?>
                <th style="border: 1px solid #000;">Tabuada de <?= $k ?></th>
            <?php endfor; ?>
        </tr>
        <!--Fim do título-->

        <?php for ($i = 1; $i <= 10; $i++): ?>
            <tr>
                <?php for ($j = 1; $j <= 10; $j++): ?>
                    <td style="border: 1px solid #000;"><?= $j ?> X <?= $i ?> = <?= ($j * $i); ?></td>
                <?php endfor; ?>
            </tr>
        <?php endfor; ?>

    </table>
    <table style="border: 1px solid #000;">
        <h4>Tabuada Divisão</h4>
        <tr>
            <?php for ($k = 1; $k <= 10; $k++): ?>
                <th style="border: 1px solid #000;">Tabuada de <?= $k ?></th>
            <?php endfor; ?>
        </tr>
        <?php for ($i = 1; $i <= 10; $i++): ?>
            <tr>
                <?php for ($j = 1; $j <= 10; $j++){ ?>
                    <td style="border: 1px solid #000;"><?= $j ?> / <?= $i ?> = <?= ($j / $i); ?></td>
                <?php } ?>
            </tr>
        <?php endfor; ?>
    </table>
</div>
</body>
</html>