### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('./card.rb')
class CardGame


  def checkforAce(card1)
    # return true if (card1.value == 1)
    if card1.value == 1
      return true
    else
      return false
    end
  end

  def highest_card(card1, card2)
    if (card1.value > card2.value)
      return card1
    else
      return card2
    end
  end

  def cards_total(cards)
    total = 0
    for card in cards
      total += card.value
    end
    return "You have a total of " + total.to_s()
  end
end
