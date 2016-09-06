#API AppleInn

Esta API gerencia todas as ações do AppleInn

### Docker

O ambiente é configurado usando Docker, você pode criar/baixar a imagem que vai gerar o container

**Baixar do Docker Hub a Imagem do NodeJS e Executar o Container**

    $ sudo docker pull ehattori/nodejs
    $ sudo docker run -it -p 3000:3000 --net host -v /$SOURCE/appleinn/api/:/home/project ehattori/nodejs

    
**Baixar do Docker Hub a Imagem do Elasticsearch e Executar o Container**

    $ sudo docker pull elasticsearch:latest
    $ sudo docker run -d -p 9200:9200 -v "$PWD/esdata":/usr/share/elasticsearch/data elasticsearch
        
**Baixar do Docker Hub a Imagem do MySql e Executar o Container**

    $ sudo docker pull mysql:latest
    $ sudo docker run -d --net="host" -p 3306:3306 -v /var/lib/mysql:/var/lib/mysql --name=mysql-appleinn --env="MYSQL_ROOT_PASSWORD=admin" mysql
    

**Gerar a partir do dockerfile do projeto**

    $ cd docker && sudo docker build -t appleinn/api .

 
 **Caracteristicas do Container**

 * Linux Ubuntu    **v14.04**
 * NodeJs          **v4.4.7**
 * Npm             **v2.15.8**
 * Mocha           **v2.5.3**
 * Pm2             **v1.1.3**
 * Istanbul        **v0.4.4**
 
**Script de Inicialização do Container**

O arquivo do container `./start.sh` é responsável por toda inicialização e configuração do contianer, o modelo encontra-s no repositório  [docker/start.sh](https://github.com/eHattori/appleinn/blob/master/docker/start.sh) onde toda a inicialização é configurada.



