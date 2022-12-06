// Supabase
const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// export async functions that fetch data

export async function getBeanieBabies(baby) {
    let response = await client
        .from('beanie_babies')
        .select()
        .order('title')
        .limit(100);

    if (baby)
        response = response.eq('baby', baby);

    return checkError(response);
}



// CheckError
function checkError({ data, error }) {
    return error ? console.error(error) : data;
}


// Debug console logs

console.log(getBeanieBabies());