require 'flickraw'

FlickRaw.api_key="531fea153764e6e089ad41e2e8945604"
FlickRaw.shared_secret="d640cd5c099cfca3"

  frob = flickr.auth.getFrob
  auth_url = FlickRaw.auth_url :frob => frob, :perms => 'read'

  puts "Open this url in your process to complete the authication process : #{auth_url}"
  puts "Press Enter when you are finished."
  STDIN.getc

  begin
    auth = flickr.auth.getToken :frob => frob
    login = flickr.test.login
    puts "You are now authenticated as #{login.username} with token #{auth.token}"
  rescue FlickRaw::FailedResponse => e
    puts "Authentication failed : #{e.msg}"
  end
