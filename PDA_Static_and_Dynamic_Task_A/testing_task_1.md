### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
# should be './card.rb'
# also that file doesn't need a semicolon n the initialize function
class CardGame


  def checkforAce(card)
    if card.value = 1
    # should be == for comparison, as = is for assignment
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # dif should be def
  # also there should be a comma between the values being passed in
  if card1.value > card2.value
    return card.name
    # should be card1 not card.name
    # Card object does not have a name attribute
    # also which card to return is not specified
    # also it doesn't say what to do if the values are equal
  else
    card2
    # should be return card2 not card2
  end
end
end
# this end statement should be after the final function not before it

def self.cards_total(cards)
# this should not be self - doesn't need a class method
  total
  # total is not a complete variable declaration, 
  # also it should be initialised to zero
  for card in cards
    total += card.value
    return "You have a total of" + total
    # this return statement should be outside the for loop or it will repeat
    # also the integer total needs converting to a string
  end
end


```
