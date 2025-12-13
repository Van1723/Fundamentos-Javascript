function age_larger()
{
    
    var age  = document.getElementById('input_age_larger').value;
    const age_split = age.split(',');
    age_llarger = age_split.filter(function(age_split) 
    {
    return age_split >= 18; 
    });
    

    document.getElementById('list_age_larger').innerHTML = 'A lista é  ' + age_llarger;

}