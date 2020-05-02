# keycloak-demo
### 安装启动Keycloak
```bash
docker run -d --name keycloak \
    -p 8080:8080 \
    -e KEYCLOAK_USER=admin \
    -e KEYCLOAK_PASSWORD=admin \
    jboss/keycloak:10.0.0
```

### 启动前端项目
```bash
cd vue-demo/
npm install
npm run serve
```

### 启动后端项目
```bash
cd spring-boot-demo/
mvn clean package
java -jar target/spring-boot-demo-0.1.0-SNAPSHOT.jar
```