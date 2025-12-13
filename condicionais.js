function result_okay_failed(){
   let note_one = document.getElementById('notes_one').value;
   let note_two = document.getElementById('notes_two').value;
   let note_tree = document.getElementById('notes_tree').value;
   let note_four = document.getElementById('notes_four').value;


   let media = (parseFloat(note_one) + parseFloat(note_two) + parseFloat(note_tree) +parseFloat(note_four)) / 4 ;
   let med = parseFloat(media);
    

    if (media.valueOf >= 5) {
        document.getElementById('result').innerHTML = 'Sua Media  foi  : ' +  ' ' + med.toFixed(2) + ' ' +'Você foi Aprovado';
        
    } else {
        document.getElementById('result').innerHTML = 'Sua Media foi   : ' +  ' ' + med.toFixed(2) + ' ' + 'Você foi Reprovado';
    }

   




}



function validator(){
    let age = document.getElementById('age').value;
    let age_convert = parseInt(age);

    if( age_convert.valueOf >= '18')
    {
        document.getElementById('age_validator').innerHTML = 'Sua idade é ' + age + '  Maior de idade';
    }
    else( age_convert < '18')
    {
        document.getElementById('age_validator').innerHTML = 'Sua idade é ' + age + '  Menor de idade';
    }    
   
}
