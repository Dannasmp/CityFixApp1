export async function getReports() {
  try {
    const response = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/reports?select=*`,
      {
        headers: {
          apikey: process.env.SUPABASE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
