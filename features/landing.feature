Feature: Landing page
  In order to create/login the user
  As a user
  I want to verify login/registration and settings menu are working
  
  Background: open app correctly
    Given I see "Sign in"
    And I see "Sign up"
    
  @critical
  Scenario: Sign in option opens correctly
    And I press "Sign in"
    Then I see "Great, you're back"
    Then I see "Continue with Google"
    Then I see "Sign in with email"
   
  @critical @this
  Scenario: Sign up option opens correctly
    And I press "Sign up"
    Then I see "Welcome to"
    Then I see "No Big Deal!"
    Then I see "By signing up, you agree to our "
    Then I see "license agreement "
    Then I see "privacy policy."
    Then I see "Continue with Google"
    Then I see "Sign up with email"
    
  @critical
  Scenario: Sign in with email option opens correctly
    And I press "Sign in"
    And I press "Sign in with email"
    Then I see "Sign in with email"
    Then I see "Forgot Password?"
    Then I see "Sign In"
    
  @critical
  Scenario: Sign in with email forgot password option works correctly
    And I press "Sign in"
    And I press "Sign in with email"
    And I press "Forgot Password?"
    Then I see "Forgot Password"
    Then I see "Reset Password"
    
  @normal
  Scenario: Sign in with email and press create account
    And I press "Sign in"
    And I press "Sign in with email"
    And I press "Create one"
    Then I see "Sign up with email"
    
  @critical
  Scenario: Sign in with inexistent email
    And I press "Sign in"
    And I press "Sign in with email"
    And I type "jtime002@gmail.com" in "Email"
    And I type "Test@112233" in "Password"
    And I press "Sign In"
    Then I see "Email or Password is incorrect."
    
  @critical
  Scenario: Sign up with email option opens correctly
    And I press "Sign in"
    Then I see "Great, you're back"
    Then I see "Continue with Google"
    Then I see "Sign in with email"
    
    

