
var oTable = $("#table").DataTable({
    rowCallback: function(row, data, index) {
      if (data[6] === 1) {
        $(row).find('td:eq(6)').css('color', 'red');
      }
      if (data[6] == 2) {
        $(row).find('td:eq(6)').css('color', 'orange');
      }
    }
  });
  

  /*
  function greet(){
    alert("Hello");
  }
  alert("Pop up");
  */