# customer-count-widget

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Customer Count</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f8f8f8;
      text-align: center;
      padding: 50px;
    }
    .card {
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      display: inline-block;
    }
    .number {
      font-size: 64px;
      color: #2E7D32;
      font-weight: bold;
    }
    .label {
      font-size: 20px;
      margin-top: 10px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="card">
    <div id="count" class="number">--</div>
    <div class="label">จำนวนลูกค้าทั้งหมด</div>
  </div>

  <script>
    fetch("https://script.google.com/macros/s/AKfycbzeHl0NhvHWGpXD91o306QdZ82TYwHQzhjGbR-aggn_6MabUSKbnmnqMGwI_dFcc50T/exec")
      .then(res => res.text())
      .then(text => {
        document.getElementById("count").innerText = text.replace(/[^\d]/g, '');
      })
      .catch(err => {
        document.getElementById("count").innerText = "Error";
      });
  </script>
</body>
</html>
