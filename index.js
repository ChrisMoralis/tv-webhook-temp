console.log('yy');  
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.post('/', function(request, response){
    // Data comes in from TradingView in following format:
    /*
    {
    "ftseBuy": {
        "type": "BUY",
        "entry": "{{plot_0}}",
        "stop": "{{plot_2}}",
        "target": "{{plot_5}}"
    },
    "ftseSell": {
        "type": "SELL",
        "entry": "{{plot_1}}",
        "stop": "{{plot_2}}",
        "target": "{{plot_6}}"
    }
    }
    */
   //This returns
    console.log(`Buy FTSE. Target: ${request.body.ftseBuy.target}`); // expected: 7060.740000
    console.log(`Buy SELL. Target: ${request.body.ftseSell.target}`); // 7002


    // console.log(request.body);
    // console.log(request.body.user.name);
    // console.log(request.body.user.email);
});


app.get('/webhook', (req, res) => {
    res.render('webhook.ejs');
})
app.post('/webhook', (req, res) => {
    console.log(req.body)
    res.send('Something else from request')
    res.send(req.body)
})

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})
 
