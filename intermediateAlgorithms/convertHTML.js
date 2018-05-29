var convertMap = {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&apos;'};

function convertHTML(str) {
  return str.split('').map(function(x) {return convertMap[x] || x;}).join('');
}

convertHTML("Dolce & Gabbana");
