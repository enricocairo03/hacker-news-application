# Hacker-news-application
Hacker News Latest è una semplice applicazione web che visualizza le ultime notizie da Hacker News. Utilizza l'API di Hacker News per recuperare gli ID delle notizie e mostrare i dettagli delle prime 10 notizie. Gli utenti possono caricare più notizie cliccando sul pulsante "Load more".

**Funzionalità**
 - Visualizza le ultime notizie da Hacker News
 - Mostra il titolo, il link e la data di pubblicazione delle notizie
 -  Carica ulteriori notizie in lotti di 10 tramite un pulsante
   
**API di Hacker News:**
L' applicazione utilizza API di Hacker News:
- https://hacker-news.firebaseio.com/v0/newstories.json : Recupera gli ID delle ultime notizie.
- https://hacker-news.firebaseio.com/v0/item/{id}.json : Recupera i dettagli di una singola notizia usando il suo ID.
  
 **Dettagli dell' Implementazione:**
- Recupero degli ID delle Notizie:

     La funzione fetchNewsIds utilizza Axios per fare una richiesta GET all'endpoint delle nuove storie di Hacker News e memorizza gli ID delle notizie in un array.

- Caricamento delle Notizie

     La funzione loadNews recupera i dettagli delle notizie in lotti di 10, utilizzando gli ID memorizzati. Per ogni notizia, crea un elemento della lista con il titolo, il link e la data della notizia.

- Dettagli della Notizia

     La funzione fetchNewsDetails utilizza Axios per fare una richiesta GET per ogni ID di notizia e restituisce i dettagli della notizia.

- Gestione del Pulsante "Load more"

     Quando l'utente clicca sul pulsante "Load more", vengono caricate e visualizzate altre 10 notizie.

# Anteprima Apllicazione

https://github.com/enricocairo03/hacker-news-application/assets/128790003/fe9f4623-9f17-40e2-b5c1-52bc756f2a9a

**Link per provare l'applicazione https://hackernews-application.netlify.app/**

