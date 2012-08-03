# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_list_session',
  :secret      => '17827a6f1778f7bb86aa1a92aa1fb6f3192bff7be53e7c66a97c3bae095b3125a277ca267db3d4560cf9834b99ecb36fbc0567d8e264655d0cf7abb9b88d981b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
