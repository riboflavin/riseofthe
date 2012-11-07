class Mailer < ActionMailer::Base
  default :from => "OSConf <admin@OSConf.com>"
  default :bcc => "admin@OSConf.com"

  def waiting(url)
#    this doesn't work for some reason - won't ever switch to test address
    @url = url
    mail(:to => "admin@OSConf.com", :subject => "Kit waiting for review")
  end

  def welcome(address, prev_address, edit_url, view_url)
#    this doesn't work for some reason - won't ever switch to test address
    @address = config.test_address || address
    @prevaddress = config.test_address || prev_address

    @edit_url  = edit_url
    @view_url  = view_url
    mail(:to => address, :cc => prev_address, :subject => "Thanks for setting up your kit on OSConf!")
  end

  def changed(address, prev_address, edit_url, view_url)
    @address = config.test_address || address
    @prevaddress = config.test_address || prev_address

    @edit_url  = edit_url
    @view_url  = view_url
    mail(:to => address, :cc => prev_address, :subject => "Email address change")
  end

end
