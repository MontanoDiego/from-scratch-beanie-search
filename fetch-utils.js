// Supabase
const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// export async functions that fetch data

export async function getBeanieBabies(animal) {
    let query = client
        .from('beanie_babies')
        .select('*')
        .order('releaseDate')
        .limit(100);

    if (animal) {
        query = query.eq('animal', animal);
    }

    const response = await query;
    return response;
}

export async function getAnimalTypes() {
    const response = await client
        .from('beanie_baby_animals')
        .select('*');

    return response;
}



// CheckError
function checkError({ data, error }) {
    return error ? console.error(error) : data;
}


// Debug console logs

console.log(getBeanieBabies());