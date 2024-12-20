import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  OwnershipTransferred,
  RewardClaimed,
  RoundFinished,
  RoundWinners,
  Transfer,
  UserBetted
} from "../generated/MyBet/MyBet"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRewardClaimedEvent(
  user: Address,
  roundId: BigInt,
  reward: BigInt
): RewardClaimed {
  let rewardClaimedEvent = changetype<RewardClaimed>(newMockEvent())

  rewardClaimedEvent.parameters = new Array()

  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return rewardClaimedEvent
}

export function createRoundFinishedEvent(
  roundId: BigInt,
  winningOption: i32
): RoundFinished {
  let roundFinishedEvent = changetype<RoundFinished>(newMockEvent())

  roundFinishedEvent.parameters = new Array()

  roundFinishedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  roundFinishedEvent.parameters.push(
    new ethereum.EventParam(
      "winningOption",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(winningOption))
    )
  )

  return roundFinishedEvent
}

export function createRoundWinnersEvent(
  roundId: BigInt,
  winner: Address,
  reward: BigInt
): RoundWinners {
  let roundWinnersEvent = changetype<RoundWinners>(newMockEvent())

  roundWinnersEvent.parameters = new Array()

  roundWinnersEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  roundWinnersEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  roundWinnersEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return roundWinnersEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUserBettedEvent(
  user: Address,
  roundId: BigInt,
  option: i32,
  amount: BigInt
): UserBetted {
  let userBettedEvent = changetype<UserBetted>(newMockEvent())

  userBettedEvent.parameters = new Array()

  userBettedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userBettedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  userBettedEvent.parameters.push(
    new ethereum.EventParam(
      "option",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(option))
    )
  )
  userBettedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return userBettedEvent
}
