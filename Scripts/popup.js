let appMetrics = document.getElementById('app-metrics');
let test = document.getElementById('test');
  // chrome.storage.sync.get('sachin', function(data) {
  //   changeColor.innerText = data.sachin;
  // });



var executor = async function(){
  
  //function definition
  let request_handler = function(id,elem){
    (async () => {
      const res = await fetch('https://sensortower.com/api/android/landing_page/report_card?app_id='+id);
      try{
        const r = await res.json();
        console.log(r);
        elem.className="d";
        elem.innerHTML += " <p> Downloads " + r.downloads + "</p>" ; 
        elem.innerHTML += "<p> Revenue " + r.revenue + "</p>" ; 
        elem.innerHTML += "<b><p style='width:160px; display: block;'> Keywords " + r.keywords.join(" ") + "</p></b>" ; 


      }
      catch(e){
        console.log('There has been a problem with your fetch operation: ' + e.message);
      }
      
    })()
    // fetch('https://frozenheadstudios.com/s_ext.php?id='+id)
    // .then(r => r.json())
    // .then(result => {
    //   console.log(result);
    //   elem.innerHTML += result.downloads;
    // })
    // .catch(e => {
    //   console.log('There has been a problem with your fetch operation: ' + e.message);
    // });
  }

  

const timer = ms => new Promise(res => setTimeout(res, ms))

            
           
  //main code
  let a = document.body.getElementsByClassName("wXUyZd");
  let i = 0;
  let stoper = 0;
  while(a && i<a.length && i<8){
    
    let b = a[i].children[0].getAttribute("href");
    let c = b.search("id=");
    let d = b.substr(c+3);
    
    request_handler(d,a[i]);
    stoper++;
    i++;
  }

  var cols = document.getElementsByClassName('uMConb  V2Vq5e POHYmb-eyJpod YEDFMc-eyJpod y1APZe-eyJpod drrice');
             for(q=0; q<cols.length; q++) {
                cols[q].style.height = '450px';           
              }
}



appMetrics.onclick = function(element) {
  chrome.tabs.executeScript({code: '(' + executor + ')();'}, function(data){
    console.log(data);
  });
};