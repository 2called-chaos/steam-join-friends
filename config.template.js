const config = {}

// 1. Go to https://steamidfinder.com
// 2. Find yourself and your steamID3
//    (it looks like this [U:1:22202])
// 3. Adjust your universe and id3 accordingly

config.my_universe       = 1
config.my_steam_id3      = 22202

// OPTIONAL: default friend
// This friend is used when you don't pass a parameter.
// 1. Find your friend on steamidfinder
// 2. Use the steamID64 (Dec)
// 3. Also use steamID64 as command line parameter to join other friends

config.default_friend_id = 76561197960287930

export default config
