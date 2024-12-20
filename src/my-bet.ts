import {
  Approval as ApprovalEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RewardClaimed as RewardClaimedEvent,
  RoundFinished as RoundFinishedEvent,
  RoundWinners as RoundWinnersEvent,
  Transfer as TransferEvent,
  UserBetted as UserBettedEvent
} from "../generated/MyBet/MyBet"
import {
  Approval,
  OwnershipTransferred,
  RewardClaimed,
  RoundFinished,
  RoundWinners,
  Transfer,
  UserBetted
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardClaimed(event: RewardClaimedEvent): void {
  let entity = new RewardClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.roundId = event.params.roundId
  entity.reward = event.params.reward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundFinished(event: RoundFinishedEvent): void {
  let entity = new RoundFinished(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundId = event.params.roundId
  entity.winningOption = event.params.winningOption

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundWinners(event: RoundWinnersEvent): void {
  let entity = new RoundWinners(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundId = event.params.roundId
  entity.winner = event.params.winner
  entity.reward = event.params.reward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserBetted(event: UserBettedEvent): void {
  let entity = new UserBetted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.roundId = event.params.roundId
  entity.option = event.params.option
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
