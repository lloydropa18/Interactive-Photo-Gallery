// search function
$('#searchBar').keyup(function (){
    // set the value
    var value = $(this).val();
    // set the regular expression to use the test method 
    // test method returns boolean 
    var exp = new RegExp(value,"i");

    // toggle the anchor tag if the input is match
    $('a').each(function() {
        var match = exp.test($(this).data('title'));
        $(this).toggle(match);
    });
});