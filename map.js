function dup_number()
{
    
    let tree_numbers = document.getElementById('input_tree_numbers').value;
    const div_tree_numbers = tree_numbers.split(',');
    const dups = div_tree_numbers.map(num => num * 2);

    document.getElementById('list_numbers').innerHTML = 'A lista é  ' + dups;

}