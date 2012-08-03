# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_mytrain_session',
  :secret      => '8980cf1f0331fee9277a6469d3777026d4e04a9ea43b397df5a5f694abd0be16a79da8a902f6305a79768ad4285ef738c74f5a493c66d348e2be9286b5ae962b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
