# Usamos una imagen oficial de Tomcat con Java 17
FROM tomcat:9.0-jdk17-temurin

# Eliminamos las aplicaciones por defecto de Tomcat
RUN rm -rf /usr/local/tomcat/webapps/*

# Copiamos tu aplicación (el contenido de la carpeta web o el WAR)
COPY web/ /usr/local/tomcat/webapps/ROOT/

# Exponemos el puerto 8080
EXPOSE 8080

# Comando para iniciar Tomcat
CMD ["catalina.sh", "run"]