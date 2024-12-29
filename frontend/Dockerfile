## a kiinduló image megadása
FROM node:23-alpine

## a munkakönyvtár definiálása a konténeren belül
WORKDIR /app

## új felhasználó (app) létrehozása
#RUN addgroup app && adduser --system -ingroup app app

## szükséges fájlok felmásolása a konténerbe
COPY package.json .

## a szükséges csomagok telempítése a konténeren belül
RUN npm install

## szükséges fájlok felmásolása a konténerbe
## .dockerignore -> kivétel fel van sorolva
COPY . .

## jogok beállítása (az app-hoz)
#RUN chown -R app:app /app
#RUN chmod 755 /app

##átlépés az app felhasználóra
#USER app

# konténer portjának megadása
EXPOSE 8100

# konténer indításakor futtatandó parancs
CMD [ "npm", "run", "dev" ]