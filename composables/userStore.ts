import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const client = useSupabaseClient()
  const userProfile = ref<{ user_name: string } | null>(null)

  const fetchUserProfile = async () => {
    const { data: userData, error: userError } = await client.auth.getUser()

    if (userError || !userData.user) {
      console.error('Error fetching user:', userError)
      return
    }

    const userId = userData.user.id

    const { data: profile, error: profileError } = await client
      .from('profiles')
      .select('user_name')
      .eq('id', userId)
      .single()

    if (profileError) {
      console.error('Error fetching user profile:', profileError)
      console.error('Profile error details:', profileError.details)
      return
    }

    userProfile.value = profile
  }

  return { userProfile, fetchUserProfile }
})
