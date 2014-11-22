class WelcomeController < ApplicationController
  def index
    @ohsix = Student.ohsix.shuffle
    @ohnine = Student.ohnine.shuffle
    @ten = Student.ten.shuffle
  end
end
